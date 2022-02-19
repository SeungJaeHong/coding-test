import {
  CommonPagingResponse,
  GoodsEntity,
  SearchGoodsParams,
} from '../entities';
import { publicApi } from '../networks';

export const goodsRepository = {
  searchGoods(params: SearchGoodsParams) {
    return publicApi.get<CommonPagingResponse<GoodsEntity>, SearchGoodsParams>(
      '/api/v1/goods',
      params
    );
  },
};
