import React from "react";
import { Text } from "react-native";

type RandomNumbers = {
  max: number,
  min: number
}

function randomInt({ max, min }: RandomNumbers){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default ({ max, min }: RandomNumbers) => {
  return (
    <Text>The value randomic is {randomInt({ max, min })}</Text>
  )
}

