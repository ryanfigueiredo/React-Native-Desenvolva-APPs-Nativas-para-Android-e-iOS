import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  test: boolean
}

export default ({children, test}:Props) => {
  if(test) {
    return children
  } else {
    return false
  }
}