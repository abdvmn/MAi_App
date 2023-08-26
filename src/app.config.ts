import colors from './constants/colors';

export default defineAppConfig({
  pages: ['pages/index/index', 'pages/userpages/home/index'],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: colors.primary,
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
  },
});
