import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

// Main access vertical

export default () => {
  return (
    // flex container
    <View style={style.flexV1}>
      {/* // flex items */}
      <Square backgroundColor='orange'/>
      <Square backgroundColor='blue'/>
      <Square backgroundColor='pink'/>
      <Square backgroundColor='purple'/>
      <Square backgroundColor='green'/>
    </View>
  )
}

const style = StyleSheet.create({
  flexV1: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000'
  }
})