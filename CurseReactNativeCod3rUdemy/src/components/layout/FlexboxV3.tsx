import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

// Main access vertical

export default () => {
  return (
    // flex container
    <View style={style.flexV3}>
      {/* // flex items */}
      <Square backgroundColor='orange'/>
      <Square backgroundColor='blue'/>
      <Square backgroundColor='pink'/>
      <Square backgroundColor='purple'/>
      <Square backgroundColor='green'/>
    </View>
  )
}

// if change main acess with flexDirection property, 
// all things is reverses
// baseline serve para alinhar elementos de acordo com o maior deles

const style = StyleSheet.create({
  flexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#000'
  }
})