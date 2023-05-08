import React from 'react'
import { Platform, Text } from 'react-native'
import style from './style'

export default () => {
  if(Platform.OS === 'android') {
    return <Text style={style.bigText}>Android</Text>
  } else if(Platform.OS === 'ios') {
    return <Text style={style.bigText}>Ios</Text>
  } else {
    return <Text style={style.bigText}>Ooops!</Text>
  }
}