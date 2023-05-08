import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Random from "./Random";

import Header from "./Header";
import Button from "./Button";
import Counter from "./Counter";
// import Father from "./direct/father";
import Father from "./indirect/Father";
import Differencer from "./differencer";
import OddEven from "./OddEven";
import FatherRelation from "./relation/Father"
import Son from "./relation/Son";
import UserloggedIn from "./UserloggedIn";
import ListProducts from "./products/ListProducts";
import products from "./products/products";
import ListProductsV2 from "./products/ListProductsV2";
import ListProductsV3 from "./products/ListProductsV3";
import WriteName from "./WriteName";
import Square from "./layout/Square";
import FlexboxV1 from "./layout/FlexboxV1";
import FlexboxV2 from "./layout/FlexboxV2";
import FlexboxV3 from "./layout/FlexboxV3";
import FlexboxV4 from "./layout/FlexboxV4";
import Mega from './Mega/index'

export default (): JSX.Element => {
  return (
    <SafeAreaView style={styles.App}>
      {/* <Header title='MEU TITULO' subTitle='meu sub-title' /> */}
      {/* //   <Random min={1} max={60}/> */}
      {/* <Button title="BOTAO"/> */}
      {/* <Counter /> */}
      {/* <Father /> */}
      {/* <Differencer /> */}
      {/* <OddEven num={2}/>
      <OddEven num={1}/> */}
      {/* <FatherRelation>
        <Son firstName="Julia" lastName="Figueiredo" />
      </FatherRelation>

      <FatherRelation>
        <Son firstName="Luana" lastName="Lira" />
      </FatherRelation> */}
      {/* <UserloggedIn name='Gui' email='gui@gui.com' />
      <UserloggedIn name='Ana' />
      <UserloggedIn email='Rocilda@roc.com' /> */}
      {/* <ListProducts /> */}
      {/* <ListProductsV2 /> */}
      {/* <ListProductsV3 /> */}
      {/* <WriteName /> */}
      {/* <FlexboxV1 /> */}
      {/* <FlexboxV2 /> */}
      {/* <FlexboxV3 /> */}
      {/* <FlexboxV4 /> */}
      <Mega sizeNumbers={12}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})