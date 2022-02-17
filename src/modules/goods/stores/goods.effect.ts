import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { distinctBy } from '../../common/utils';
import { PagingResponse } from '../../core/entities';
import repository from '../../core/repository';
import { RootStateType } from '../../rootStore';
import { GoodsModel } from '../models';
import { toGoodsListModel } from './goods.converter';
import { drfSearchGoodsState } from './goods.selector';

export const actSearchGoodsParams = createAction<any>('SearchGoodsParams');

export const effSearchGoods = createAsyncThunk<
  PagingResponse<GoodsModel>,
  void,
  { state: RootStateType }
>('SearchGoods', async (_, api) => {
  const { goodsList, params } = drfSearchGoodsState(api.getState());
  const result = await repository.goods.searchGoods(params);
  const uniqueList = distinctBy(
    [...goodsList, ...toGoodsListModel(result?.data?.list)],
    'goodsName'
  );

  return { ...result.data, list: uniqueList };
});
