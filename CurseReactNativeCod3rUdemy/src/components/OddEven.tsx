import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

interface IOddEven {
  num: number
}

// export default ({num}: IOddEven) => {
//   console.warn(num)
//   if(num % 2 == 0) {
//     return <Text style={style.bigText}>Odd</Text>  
//   } else {
//     return <Text style={style.bigText}>Even</Text>
//   }
// }

export default ({num}: IOddEven) => {
  return (
    <>
      { num % 2 == 0 
        ? <Text style={style.bigText}>Odd</Text>
        : <Text style={style.bigText}>Even</Text>
      }
    </>
  )
}