import React from 'react'
import { View } from 'react-native'

type TypeColor = {
  backgroundColor?: string
  side?: number
}

export default ({ backgroundColor = 'black', side = 50 }: TypeColor) => {
  return (
    <View style={{
      height: side,
      width: side,
      backgroundColor: backgroundColor
    }} />
  )
}
