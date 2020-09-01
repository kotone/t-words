import Taro from '@tarojs/taro'
import { setHttpCache, interceptCache } from './cache-plugin'

const http = async (name: string, data = {}): Promise<any> => {
  Taro.showLoading()
  let cacheData = interceptCache(name, data)
  if (cacheData) return cacheData
  try {
    const res = await Taro.cloud.callFunction({
      name,
      data
    })
    if (res.errMsg === 'cloud.callFunction:ok') {
      Taro.hideLoading()
      // 记录本次调用的结果
      setHttpCache(name, data, res.result)
      return res.result
    } else {
      // TODO: 异常处理
      Taro.hideLoading()
    }

  } catch (err) {
    Taro.hideLoading()
    // TODO: 错误处理
  }
}

export default http
