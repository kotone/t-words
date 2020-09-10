// @ts-ignore
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
const Learn = () => {
  return (
    <View
      className="pageBlur learn"
    >
      <View className="header">
        head
      </View>
      <View className="content">
        <View className="word-box">
          <View className="word">deserve</View>
          <View className="romaji">deserve</View>
        </View>
        {/* 选项 */}
        <View className="option-box">
          <View className="item">值得，应得</View>
          <View className="item">值得，应得</View>
          <View className="item">值得，应得</View>
          <View className="item">值得，应得</View>
        </View>
        <View className="button-option">
          <View className="item">看答案</View>
        </View>
      </View>
      <View className="footer">
        <View className="iconfont icon-radio-checked"></View>
        <View className="iconfont icon-radio-checked"></View>
        <View className="iconfont icon-radio-checked"></View>
        <View className="iconfont icon-radio-checked"></View>
      </View>
    </View>
  )
}
export default Learn

