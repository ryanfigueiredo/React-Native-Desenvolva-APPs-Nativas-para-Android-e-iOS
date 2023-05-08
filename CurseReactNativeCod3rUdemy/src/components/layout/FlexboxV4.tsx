import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

// Main access vertical

export default () => {
  return (
    // flex container
    <View style={style.flexV4}>
      {/* // flex items */}
      <View style={style.viewV0} />
      <View style={style.viewV1} />
      <View style={style.viewV2} />
    </View>
  )
}

// flexgrow quando sozinho so serve para alinhamento dos eixos
// mas quando tem mais de um, ele diz qual tem maior prioridade
// e quantas vezes cada um(flexGrow) vai ficar dividido
const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000'
  },
  viewV0: {
    backgroundColor: 'yellow',
    height: 200
  },
  viewV1: {
    backgroundColor: 'red',
    flexGrow: 4
  }, 
  viewV2: {
    backgroundColor: 'green',
    flexGrow: 2
  }
})