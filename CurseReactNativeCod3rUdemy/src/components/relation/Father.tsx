import React, { ReactNode } from 'react'
import { Text } from 'react-native'

type Props = {
  children: ReactNode
}

export default ({children}: Props) => {
  return (
    <>
      <Text>Members of family:</Text>
      {children}
    </>
  )
}