import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from "redux-thunk";

import rootReducer, { IRootState } from './combineReducer';

const store = configureStore({
  "reducer": rootReducer,
  "middleware": [...getDefaultMiddleware()]
});

export type AppThunk = ThunkAction<void, IRootState, null, Action<string>>
export type Dispatch = typeof store.dispatch;
export default store;
