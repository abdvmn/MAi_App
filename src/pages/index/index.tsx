import { View, Text, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';

import colors from '@/constants/colors';
import Button from '@/components/button';
import useRedux from '@/hooks/useRedux';
import backgroundImage from '@/resources/welcome_bg.png';

import './index.css';

const Welcome = () => {
  // Function to navigate to another screen
  // 导航到另一个页面的函数
  const navigateToAnotherScreen = (url: string) => {
    Taro.navigateTo({
      url,
    });
  };

  return (
    <Image
      src={backgroundImage}
      mode='aspectFill'
      style={{
        width: '100%',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          bottom: '10%',
          textAlign: 'center',
          paddingRight: 32,
          paddingLeft: 32,
        }}
      >
        <View style={{ marginBottom: 8 }}>
          <Text
            style={{
              color: colors.grey6,
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            欢迎使用MAi代理人程序
          </Text>
        </View>

        <View style={{ marginBottom: 22 }}>
          <Text style={{ color: colors.grey4, fontSize: 13 }}>
            身比錯几經乙故火八個羊花民是別尤刃下活爪員哪乍呢花枝裝六犬食蝸打金，秋合春圓穿高八幾喜一間男急乾右元。
          </Text>
        </View>
        <Button title='登录' fn={() => navigateToAnotherScreen('/pages/userpages/home/index')} />
      </View>
    </Image>
  );
};

export default function Index() {
  // 使用自定义 Hook 从 Redux 中获取用户数据和认证状态
  // Retrieve user data and authentication status from Redux using custom hook
  const { userData } = useRedux();

  // 条件渲染：若为 'auth' 状态，则显示欢迎页面，否则显示主页
  // Conditional rendering: Display Welcome screen for 'auth' status, Home screen otherwise
  return userData.status === 'auth' ? <Welcome /> : <></>;
}
