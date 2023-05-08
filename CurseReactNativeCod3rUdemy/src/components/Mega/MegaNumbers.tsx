import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import style from '../style'

interface INumber {
  number: number,
  index: number
}

export default ({ number, index }: INumber) => {
  return (
    <View key={index} style={styleThis.container}>
      <Text style={[style.bigText, styleThis.number]}>
        {number}
      </Text>
    </View>
  )
}

const styleThis = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    margin: 5,
    borderRadius: 25
  },

  number: {
    color: 'white'
  }
})