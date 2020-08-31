import Taro from '@tarojs/taro'

const http = async (name: string, data = {}): Promise<any> => {
  // TODO: 重复请求处理
  let maxAge = 10000
  Taro.showLoading()
  let time = +new Date()
  let HTTPCACHE = Taro.getStorageSync('HTTPCACHE') || '{}'
  let obj = JSON.parse(HTTPCACHE)
  if (obj[name]) {
    let { creatTime } = obj[name]
    let timeExpired = time - creatTime > maxAge
    let someParams = name === obj.__prevMethod__ && JSON.stringify(data) === obj[name].params
    // 保留加载动画
    if (!timeExpired && someParams) {
      setTimeout(() => Taro.hideLoading(), 500)
      return obj[name].result
    }
  }
  try {
    const res = await Taro.cloud.callFunction({
      name,
      data
    })
    if (res.errMsg === 'cloud.callFunction:ok') {
      Taro.hideLoading()
      obj[name] = {
        method: name,
        creatTime: time,
        result: res.result,
        params: JSON.stringify(data)
      }
      // 记录本次调用的结果
      obj.__prevMethod__ = name
      Taro.setStorageSync('HTTPCACHE', JSON.stringify(obj))
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
