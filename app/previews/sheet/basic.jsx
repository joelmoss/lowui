/* eslint-disable react/prop-types */

import { useCallback } from "react"
import Sheet from "@lowui/sheet"
import Body from "@lowui/sheet/body"
import Header from "@lowui/sheet/header"
import { useSheet } from "@lowui/sheet/hooks"

const Basic = () => {
  const { toggleSheet } = useSheet(1)
  const onClick = useCallback(() => toggleSheet(true), [toggleSheet])

  return (
    <>
      <button type="button" onClick={onClick}>
        Open Sheet
      </button>
      <Sheet id={1} isOpen>
        <Header title="Hey there, I'm a Sheet!" />
        <Body>And I am the body of the sheet.</Body>
      </Sheet>
    </>
  )
}

export default Basic
