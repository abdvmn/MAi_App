import { Image, Text, View } from '@tarojs/components';
import bannerImage from '@/resources/banner1.jpg';
import './index.css';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View className='gradient-background' style={{ height: 184 }}>
        <View style={{ textAlign: 'center' }}>
          <Image
            src={bannerImage}
            mode='aspectFill'
            style={{
              width: '95%',
              height: 152,
              alignSelf: 'center',
              borderRadius: 14,
              marginTop: 14,
              marginBottom: 14,
            }}
          />
        </View>
      </View>
      <Text>Hello</Text>
    </View>
  );
}
