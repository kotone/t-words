import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import http from '../../utils/http'

const Login: React.FC = () => {
  const [loginData, getLoginData] = useState({})
  const getLogin = async () => {
    const res = await http('login')
    getLoginData(res)
  }
  return (
    <View className='index'>
      <Button onClick={getLogin}>获取登录云函数</Button>
      <Text>context：{JSON.stringify(loginData)}</Text>
    </View>
  )
}

export default Login
