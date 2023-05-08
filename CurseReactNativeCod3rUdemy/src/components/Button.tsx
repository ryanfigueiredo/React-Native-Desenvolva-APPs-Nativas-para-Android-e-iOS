import React from "react";
import { Button } from "react-native";

interface IButton {
  title: string,
  // onPressF: () => {}
}

export default ({title}: IButton) => {
  function execute() {
    console.warn('Exec...')
  }

  return (
    <>
      <Button title={title} onPress={execute} />
      <Button title={title} onPress={() => { console.warn('Exec 2...') }} />
    </>
  )
}