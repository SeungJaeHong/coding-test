import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit';
import { RootStateType } from '../../rootStore';

const selGoodsStore = (state: RootStateType) => state.goods;

export const selGoodsState = createSelector(selGoodsStore, (state) => ({
  loading: state.loading,
  goodsList: state.goodsList,
  hasNextPage: state.hasNextPage,
  totalCount: state.totalCount,
}));

export const drfSearchGoodsState = createDraftSafeSelector(
  selGoodsStore,
  (state) => ({ goodsList: state.goodsList, params: state.params })
);

export const selSearchGoodsParams = createSelector(
  selGoodsStore,
  (state) => state.params
);

export const selShowSearchInput = createSelector(
  selGoodsStore,
  (state) => state.showInput
);
