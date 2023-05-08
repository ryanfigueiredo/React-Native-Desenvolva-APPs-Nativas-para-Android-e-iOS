import React from 'react'
import { View, Text } from 'react-native'
import style from '../style'

interface PropNumbers {
  a: number,
  b: number
}

export default ({a, b} :PropNumbers ) => {
  return (
    <>
      <Text style={style.bigText}>
      {a}
      </Text>

      <Text style={style.bigText}>
        {b}
      </Text>
    </>
  )
}