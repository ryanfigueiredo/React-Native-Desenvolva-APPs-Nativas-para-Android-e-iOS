import React, { Component, ReactNode } from 'react'
import { Text, TextInput } from 'react-native'
import style from '../style'

type TSizeNumbers = {
  sizeNumbers: number
}

// export default class mega extends Component<TSizeNumbers, TSizeNumbers> {
//   state = {
//     sizeNumbers: this.props.sizeNumbers
//   }

//   changeSizeNumbers(size: number) {
//     this.setState({ sizeNumbers: size })
//   }

//   render(): ReactNode {
//     return (
//       <>
//         <Text style={style.bigText}>
//           Generate Mega-sena { this.state.sizeNumbers }
//         </Text>

//         <TextInput 
//         placeholder='Size numbers' 
//         value={this.state.sizeNumbers} 
//         onChangeText={this.changeSizeNumbers}/> 
//         {/* checar depois essa chamada de funcao no JS */}
//       </>
//     )
//   }
// }

// outra forma de fazer usando constructor
export default class mega extends Component<TSizeNumbers, TSizeNumbers> {
  // props: Readonly<{ sizeNumbers: number }>
  // state: Readonly<{ sizeNumbers: number }>

  state = {
    sizeNumbers: this.props.sizeNumbers
  }

  // constructor(props: TSizeNumbers) {
  //   super(props)

  //   // this.state = {
  //   //   sizeNumbers: props.sizeNumbers
  //   // }

  //   // dessa forma o this vai ser bindin`ado` para se referir a class
  //   this.changeSizeNumbers = this.changeSizeNumbers.bind(this)
  // }

  // changeSizeNumbers(size: number) {
  //   this.setState({ sizeNumbers: size })
  // }

  // quando colocado em uma arrow function o this sempre vai apontar para onde o
  // metodo foi definido  
  changeSizeNumbers = (size: number) => {
    this.setState({ sizeNumbers: size })
  }

  render(): ReactNode {
    return (
      <>
        <Text style={style.bigText}>
          Generate Mega-sena { this.state.sizeNumbers }
        </Text>

        <TextInput 
          placeholder='Size numbers' 
          value={`${this.state.sizeNumbers}`} 
          // *onChangeText={this.changeSizeNumbers} />
          // o this dentro de uma arrow function vai sempre apontar para onde
          // essa funcao foi definida
          // onChangeText={size => this.changeSizeNumbers(parseInt(size))} />
          onChangeText={this.changeSizeNumbers}
          />
       </>
    )
  }
}