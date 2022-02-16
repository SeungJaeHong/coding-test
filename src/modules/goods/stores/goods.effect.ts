import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchGoodsParams } from '../../core/entities';
import repository from '../../core/repository';
import { RootStateType } from '../../rootStore';
import { GoodsModel } from '../models';
import { toGoodsListModel } from './goods.converter';

export const effSearchGoods = createAsyncThunk<
  GoodsModel[],
  SearchGoodsParams,
  { state: RootStateType }
>('SearchGoods', async (payload) => {
  const result = await repository.goods.searchGoods(payload);
  return toGoodsListModel(result.data.list);
});
