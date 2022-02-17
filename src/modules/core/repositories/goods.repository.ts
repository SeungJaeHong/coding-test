import {
  MockGoodsList,
  mockGoodsList,
} from '../../goods/fixtures/goodsList.fixture';
import { SearchGoodsParams } from '../entities';

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

  const filtered = mockGoodsList.filter((goods) => {
    return (
      filters.every((filter) => goods[filter]) &&
      (goods.brandName.includes(keyword) || goods.goodsName.includes(keyword))
    );
  });

  return toPaginatedData(filtered, page, size);
}

const timeout = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const toPaginatedData = <T>(items: T[], page: number, size: number) => ({
  data: {
    list: items.slice((page - 1) * size, page * size),
    hasNextPage: page * size < items.length,
    totalCount: items.length,
  },
});
