import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Son from './Son'

export default () => {
  const [number, setNumber] = useState(0)

  function showNumber(number: number) {
    setNumber(number)
  }

  return (
    <>
      <Text>{number}</Text>
      <Son min={1} max={60} callFunction={showNumber}/>
    </>
  )
}