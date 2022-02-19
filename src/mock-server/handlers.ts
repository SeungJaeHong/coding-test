import { rest } from 'msw';
import { GoodsFilterType } from '../modules/common/constants';
import { GoodsEntity, SearchGoodsParams } from '../modules/core/entities';
import { goodsJson } from './goods-json.fixture';

const handlers = [
  rest.get('/api/v1/goods', async (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword') || '';
    const filters = (req.url.searchParams.getAll('filters[]') ||
      []) as GoodsFilterType[];
    const page = Number(req.url.searchParams.get('page') || 1);
    const size = Number(req.url.searchParams.get('size') || 10);

    const requestParams = {
      keyword,
      filters,
      page,
      size,
    };

    const goods = await searchGoods(requestParams);

    return res(ctx.status(200), ctx.delay(300), ctx.json(goods));
  }),
];

async function searchGoods({
  page,
  size,
  keyword,
  filters,
}: SearchGoodsParams) {
  await timeout(300);

  const searchFields = ['brandName', 'goodsName'];

  let goodsList = goodsJson;
  const shouldFilterSoldOut = filters.includes('isSoldOut') === false;
  if (shouldFilterSoldOut) {
    goodsList = goodsJson.filter((goods) => !goods.isSoldOut);
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

const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const toPaginatedData = <T>(items: T[], page: number, size: number) => ({
  data: {
    list: items.slice((page - 1) * size, page * size),
    hasNextPage: page * size < items.length,
    totalCount: items.length,
  },
});

export default handlers;
