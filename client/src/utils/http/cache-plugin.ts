import Taro from '@tarojs/taro'
import { maxAge } from './congfig'

interface ITarget {
  [key: string]: any;
}
const HTTPCACHE: string = Taro.getStorageSync('HTTPCACHE') || '{}'
const target: ITarget = JSON.parse(HTTPCACHE)

/**
 * 判断缓存是否过期
 * @param method 方法
 * @param params 参数
 */
export const interceptCache = (method: string, params: object) => {
  if (target[method]) {
    let time = +new Date()
    let { creatTime } = target[method]
    let timeExpired = time - creatTime > maxAge
    let someParams = method === target.__prevMethod__ && JSON.stringify(params) === target[method].params
    // 保留加载动画
    if (!timeExpired && someParams) {
      setTimeout(() => Taro.hideLoading(), 500)
      return target[method].result
    }
  }
  return false
}

/**
 * 设置 http 缓存
 * @param method 方法
 * @param params 参数
 * @param result 结果
 */
export const setHttpCache = (method: string, params: object, result: any) => {
  target[method] = {
    method,
    creatTime: +new Date(),
    result,
    params: JSON.stringify(params)
  }
  target.__prevMethod__ = method
  Taro.setStorageSync('HTTPCACHE', JSON.stringify(target))
}
