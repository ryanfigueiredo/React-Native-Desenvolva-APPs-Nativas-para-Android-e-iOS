import React from 'react'
import { ListRenderItemInfo, Text, FlatList, ListRenderItem } from 'react-native'
import style from '../style'
import products from './products'

interface IProduct {
  id: number,
  name: string,
  price: number
}

export default () => {
  const renderProducts = (itemData: ListRenderItemInfo<IProduct>) => {
    return <Text>Has {itemData.item.name}</Text>
  }

  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <Text>Has {item.name}</Text>
 )

 const renderProductT: ListRenderItem<IProduct> = ({ item }) => {
  return <Text>Has {item.name}</Text>
 }

  return (
    <>
      <Text style={style.bigText}>
        List of Products V2
      </Text>
      <FlatList 
        data={products}
        keyExtractor={product => `${product.id}`}
        renderItem={renderProductT}
      />
    </>
  )
}
