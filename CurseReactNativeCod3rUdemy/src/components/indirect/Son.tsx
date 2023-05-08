import React from 'react'
import { View, Button } from 'react-native'

interface PropsNumbers {
  min: number,
  max: number,
  callFunction: Function
}

export default ({min, max, callFunction}: PropsNumbers) => {
  function generateNumber(min: number, max: number) {
    const factor = max - min + 1
    return parseInt((Math.random() * factor).toString()) + min
  }

  return (
    <Button title="Execute" onPress={function() { 
      const number = generateNumber(min, max) 
      callFunction(number)
    }}/>
  )
}