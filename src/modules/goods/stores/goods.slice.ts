/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SearchGoodsParams } from '../../core/entities';
import { GoodsModel } from '../models';
import { toGoodsParams } from './goods.converter';
import { actSearchGoodsParams, effSearchGoods } from './goods.effect';

interface GoodsState {
  loading: boolean;
  goodsList: GoodsModel[];
  hasNextPage: boolean;
  totalCount: number;
  params: SearchGoodsParams;
}

export function getInitGoodsState() {
  const result: GoodsState = {
    loading: false,
    goodsList: [],
    hasNextPage: true,
    totalCount: 0,
    params: toGoodsParams(),
  };
  return result;
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: getInitGoodsState(),
  reducers: {
    reset() {
      return getInitGoodsState();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actSearchGoodsParams, (state, { payload }) => {
        state.loading = true;
        state.params = { ...state.params, ...payload };
      })
      .addCase(effSearchGoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(effSearchGoods.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.goodsList = payload.list;
        state.hasNextPage = payload.hasNextPage;
        state.totalCount = payload.totalCount;
      })
      .addCase(effSearchGoods.rejected, (state) => {
        state.loading = false;
      });
  },
});
