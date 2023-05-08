import React, { Component, ReactNode } from 'react'
import { Text, TextInput, Button, View, StyleSheet } from 'react-native'
import style from '../style'
import MegaNumbers from './MegaNumbers'

type TSizeNumbers = {
  sizeNumbers: number
  numbers?: number[]
}

export default class mega extends Component<TSizeNumbers, TSizeNumbers> {
  state = {
    sizeNumbers: this.props.sizeNumbers,
    numbers: []
  }

  changeSizeNumbers = (size: string) => {
    this.setState({ sizeNumbers: +size })
  }

  generateNumberNotIn = (numbers: number[]): number  => {
    const neew = parseInt((Math.random() * 60).toString()) + 1
    return numbers.includes(neew) ? this.generateNumberNotIn(numbers) : neew
  }

  generateNumbers = () => {
    const numbers = Array(this.state.sizeNumbers)
      .fill({})
      .reduce(n =>[...n, this.generateNumberNotIn(n)] , [])
      .sort((a: number, b: number) => a - b) // ordena os numeros de forma ASC

    this.setState({ numbers })
  }

  showNumbers = () => {
    const numbers: number[] = this.state.numbers

    return numbers.map((number, index) => {
      return <MegaNumbers number={number} index={index} />
    })
  }

  // generateNumbers2 = () => {
  //   const { sizeNumbers } = this.state
  //   const numbers: number[] = []

  //   for(let i = 0; i < sizeNumbers; i++) {
  //     numbers.push(this.generateNumberNotIn(numbers))
  //   }

  //   numbers.sort((a, b) => a - b)
  //   this.setState({ numbers })
  // }

  render(): ReactNode {
    return (
      <>
        <Text style={style.bigText}>
          Generate Mega-sena { this.state.sizeNumbers }
        </Text>

        <TextInput
          keyboardType='numeric'
          placeholder='Size numbers' 
          value={`${this.state.sizeNumbers}`} 
          onChangeText={this.changeSizeNumbers}
        />

        <Button 
          title='Generate numbers'
          onPress={this.generateNumbers} 
        />
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>

          {this.showNumbers()}
        </View>
      </>
    )
  }
}