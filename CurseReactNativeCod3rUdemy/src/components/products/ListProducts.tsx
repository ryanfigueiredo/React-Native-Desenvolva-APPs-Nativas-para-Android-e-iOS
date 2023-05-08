import React from 'react'
import { View, Text } from 'react-native'
import style from '../style'
import products from './products'

export default () => {
  return (
    <>
      {products.map(product => {
        return (
          <>
            <Text key={product.id} style={style.bigText}>
              {product.id} - {product.name}, have a price: ${product.price}
            </Text>
         </>
        )
      })}
    </>
  )
}
