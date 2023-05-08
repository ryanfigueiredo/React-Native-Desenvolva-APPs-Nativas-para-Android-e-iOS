import React from "react";
import { View, Text } from "react-native";
import style from './style'

type HeaderParams = {
  title: String,
  subTitle: String
}

export default ({title, subTitle}: HeaderParams)  => {
  return (
    <>
      <Text style={style.bigText}>{title}</Text>
      <Text>{subTitle}</Text>
    </>
  )
}