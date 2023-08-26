// This custom hook, `useRedux`, provides a convenient way to interact with Redux state and dispatch actions. It utilizes the `useAppSelector` and `useAppDispatch` hooks from the `reduxHooks` to access the Redux store and dispatch actions.
// 该自定义 Hook `useRedux` 提供了一种方便的方式来与 Redux 状态进行交互。它利用了 `reduxHooks` 模块中的 `useAppSelector` 和 `useAppDispatch` 钩子来访问 Redux 存储并分发动作。

import * as AuthSlice from '@/slices/UserSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export default function useRedux() {
  // Access user data from the Redux store state
  // 从 Redux 存储状态中获取用户数据
  const userData = useAppSelector((state) => state.user);
  // Obtain the dispatch function
  // 获取分发函数
  const dispatch = useAppDispatch();

  // Dispatch the action to update authentication status
  // 分发动作以更新认证状态
  const setAuthStatus = (args: 'auth' | 'main') =>
    dispatch(AuthSlice.setAuthStatus(args));

  // Return user data and the setAuthStatus function for use in components
  // 返回用户数据和 setAuthStatus 函数以供在组件中使用
  return {
    userData,
    setAuthStatus,
  };
}
