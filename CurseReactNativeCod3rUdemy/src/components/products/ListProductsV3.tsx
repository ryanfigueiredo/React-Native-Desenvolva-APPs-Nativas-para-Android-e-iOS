import React from 'react'
import {
  View,
  FlatList,
  Text,
} from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First ItemSSSS',
  },
]

type ItemProps = {title: string}

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
)

interface IItem {
  id: string
  title: string
}

const renderItem2 = ({ item }: any) => {
  console.warn(item)

  return (
    <Text>{ item.title }</Text>
  )
}

export default () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem2}
        keyExtractor={item => item.id}
      />
    </>
  )
}