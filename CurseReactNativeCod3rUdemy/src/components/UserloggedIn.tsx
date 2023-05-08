import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import If from './if'

interface IUser{
  name?: string,
  email?: string
}

export default (iUser: IUser) => {
  const user = iUser || {}
  
  return (
    <>
      <If test={user && user.email && user.name}>
        <Text style={style.bigText}>User Logged in: </Text>
        <Text style={style.bigText}>{ user.name } - { user.email }</Text>
      </If>
    </>
  )
}