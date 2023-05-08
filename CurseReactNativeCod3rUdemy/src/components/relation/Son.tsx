import React from 'react'
import { View, Text } from 'react-native'
import style from '../style'

interface IRelation {
  firstName: string,
  lastName: string
}

export default ({firstName, lastName}: IRelation) => {
  return (
    <Text style={style.bigText}>
      {firstName} {lastName}
    </Text>
  )
}