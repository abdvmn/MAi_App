import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';

// 通过配置 reducer 创建 Redux 存储
// Create a Redux store by configuring its reducer
export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

// 从存储本身推断出 `RootState` 和 `AppDispatch` 类型
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// 推断的类型：{user: UserState}
// Inferred type: {user: UserState}
export type AppDispatch = typeof store.dispatch;
