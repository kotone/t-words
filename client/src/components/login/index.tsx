import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import http from '../../utils/http'

interface ILoginData {
  appId?: string;
  openId?: string;
}
const Login: React.FC = () => {
  const [loginData, getLoginData] = useState<ILoginData>({})
  const getLogin = async () => {
    const { event: { userInfo } } = await http('login')
    getLoginData(userInfo)
  }
  return (
    <View className='index'>
      <Button onClick={getLogin}>获取登录云函数</Button>
      <Text>appId：{loginData.appId}</Text>
    </View>
  )
}

export default Login
