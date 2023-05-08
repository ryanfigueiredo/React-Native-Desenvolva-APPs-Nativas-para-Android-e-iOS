import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default () => {
  const [name, setName] = useState('Test')

  return (
    <View>
      <Text>{name}</Text>

      <TextInput 
        placeholder='Write your name' 
        value={name}
        onChangeText={name => setName(name)}
      />
    </View>
  )
}