export default {
  pages: [
    'pages/home/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom'
  },
  networkTimeout: {
    request: 5000,
    downloadFile: 10000
  },
  lazyCodeLoading: 'requiredComponents',
  cloud: true
}
