import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { distinctBy } from '../../common/utils';
import { PagingResponse, SearchGoodsParams } from '../../core/entities';
import repository from '../../core/repository';
import { RootStateType } from '../../rootStore';
import { GoodsModel } from '../models';
import { toGoodsListModel } from './goods.converter';
import { drfSearchGoodsState } from './goods.selector';

export const actSearchGoodsParamsApply = createAction<
  Partial<SearchGoodsParams>
>('SearchGoodsParamsApply');

export const actToggleShowSearchInput = createAction('ToggleShowSearchInput');

export interface SearchGoodsPayload {
  reset?: boolean;
}

export const effSearchGoods = createAsyncThunk<
  PagingResponse<GoodsModel>,
  SearchGoodsPayload,
  { state: RootStateType }
>('SearchGoods', async ({ reset = false }, api) => {
  const { goodsList, params } = drfSearchGoodsState(api.getState());
  const result = await repository.goods.searchGoods(params);

  let list = [];
  if (reset) {
    list = toGoodsListModel(result?.data?.list);
  } else {
    list = goodsList.concat(toGoodsListModel(result?.data?.list));
  }

  return { ...result.data, list: distinctBy(list, 'goodsName') };
});
