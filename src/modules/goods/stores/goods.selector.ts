import { RootStateType } from '../../rootStore';
import { createSelector } from '@reduxjs/toolkit';

const selGoodsStore = (state: RootStateType) => state.goods;

export const selGoodsState = createSelector(selGoodsStore, (state) => ({
  loading: state.loading,
  goodsList: state.goodsList,
}));
