import {
  MockGoodsList,
  mockGoodsList,
} from '../../goods/fixtures/goodsList.fixture';
import { GoodsEntity, SearchGoodsParams } from '../entities';

export const goodsRepository = {
  searchGoods(params: SearchGoodsParams): Promise<MockGoodsList> {
    return mockRequest(params);
  },
};

async function mockRequest({
  page,
  size,
  keyword,
  filters,
}: SearchGoodsParams) {
  await timeout();

  const searchFields = ['brandName', 'goodsName'];

  let goodsList = mockGoodsList;
  const shouldFilterSoldOut = filters.includes('isSoldOut') === false;
  if (shouldFilterSoldOut) {
    goodsList = mockGoodsList.filter((goods) => !goods.isSoldOut);
  }

  if (keyword === '' && filters.length === 0) {
    return toPaginatedData(goodsList, page, size);
  }

  if (keyword) {
    if (filters.length) {
      return toPaginatedData(
        goodsList.filter(
          (goods) =>
            filters.some((filter) => goods[filter]) ||
            searchFields.some((field) =>
              (goods[field as unknown as keyof GoodsEntity] as string).includes(
                keyword
              )
            )
        ),
        page,
        size
      );
    }

    return toPaginatedData(
      goodsList.filter((goods) =>
        searchFields.some((field) =>
          (goods[field as unknown as keyof GoodsEntity] as string).includes(
            keyword
          )
        )
      ),
      page,
      size
    );
  }

  return toPaginatedData(
    goodsList.filter((goods) => filters.some((filter) => goods[filter])),
    page,
    size
  );
}

const timeout = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const toPaginatedData = <T>(items: T[], page: number, size: number) => ({
  data: {
    list: items.slice((page - 1) * size, page * size),
    hasNextPage: page * size < items.length,
    totalCount: items.length,
  },
});
