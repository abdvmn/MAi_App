import colors from '@/constants/colors';
import { View, Text } from '@tarojs/components';

export default function Button({
  backgroundColor = colors.primary,
  title,
  titleColor = colors.grey6,
  fn,
}: {
  backgroundColor?: string;
  title: string;
  titleColor?: string;
  fn?: any;
}) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        padding: 8,
        borderRadius: 14,
      }}
      onClick={fn && fn}
    >
      <Text
        style={{
          fontSize: 13,
          color: titleColor,
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </View>
  );
}
