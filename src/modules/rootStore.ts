import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { goodsSlice } from './goods/stores';

const rootReducer = combineReducers({
  goods: goodsSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootStateType = ReturnType<typeof store.getState>;
export type RootDispatchType = typeof store.dispatch;
