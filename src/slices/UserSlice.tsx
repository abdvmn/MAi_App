import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// 为切片状态定义一种类型
// Define a type for the slice state
type AuthStatus = 'auth' | 'main';

type User = {
  status: AuthStatus;
  info?: {};
};

// 使用类型定义初始状态
// Define the initial state using the type
const initialState: User = {
  status: 'auth',
};

// 创建 Redux 存储的一个切片
// Create a slice of the Redux store
export const UserSlice = createSlice({
  name: 'user',
  // `createSlice` 将从 `initialState` 参数推断出状态类型
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // 定义一个用于设置身份验证状态的 reducer 函数
    // Define a reducer function to set the authentication status
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload;
    },
  },
});

// 导出 action 创建函数
// Export action creators
export const { setAuthStatus } = UserSlice.actions;

// 导出 reducer 函数
// Export the reducer function
export default UserSlice.reducer;
