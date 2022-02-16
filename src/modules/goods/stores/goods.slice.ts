/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SearchGoodsParams } from '../../core/entities';
import { GoodsModel } from '../models';
import { toGoodsParams } from './goods.converter';
import { effSearchGoods } from './goods.effect';

interface GoodsState {
  loading: boolean;
  goodsList: GoodsModel[];
  params: SearchGoodsParams;
}

export function getInitGoodsState() {
  const result: GoodsState = {
    loading: true,
    goodsList: [],
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
      .addCase(effSearchGoods.pending, (state) => {
        state.loading = true;
        state.goodsList = [];
      })
      .addCase(effSearchGoods.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.goodsList = payload;
      })
      .addCase(effSearchGoods.rejected, (state) => {
        state.loading = false;
      });
  },
});
