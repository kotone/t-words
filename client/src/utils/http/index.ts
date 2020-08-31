import Taro from '@tarojs/taro'

const http = (name: string, data = {}) => {
  return Taro.cloud.callFunction({
    name,
    data
  })
}

export default http
