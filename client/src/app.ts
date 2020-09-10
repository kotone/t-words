// @ts-ignore
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import './styles/index.less'
class App extends Component {

  componentDidMount () {
    let systemInfo = Taro.getSystemInfoSync()
    console.log(systemInfo)
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
