import React, { useState } from "react";
import { Button, Text } from "react-native";
import style from "./style";

export default () => {
  // let number = 0
  const numberBase: number = 0

  const [number, setNumber] = useState(numberBase)

  const increment = () => { setNumber(number + 1) }
  const decrement = () => { setNumber(number - 1) }

  return (
    <>
      <Text style={style.bigText}>{number}</Text>
      <Button title="+" onPress={increment}/>
      <Button title="-" onPress={decrement}/>
    </>
  )
}

