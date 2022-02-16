import {
  MockGoodsList,
  mockGoodsList,
} from '../../goods/fixtures/goodsList.fixture';

export const goodsRepository = {
  searchGoods(params: any): Promise<MockGoodsList> {
    return new Promise((resolve, _) => resolve(mockGoodsList));
  },
};
