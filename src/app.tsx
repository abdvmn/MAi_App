import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

function App({ children }: PropsWithChildren<any>) {
  // 使用 Redux 存储和应用程序的子组件渲染 Provider 组件
  // Render the Provider component with the Redux store and the app's child components
  return <Provider store={store}>{children}</Provider>;
}

export default App;
