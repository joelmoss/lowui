/* eslint-disable react/prop-types */

import { useCallback } from "react"
import Sheet, { SheetBody, SheetHeader, useSheet } from "@lowui/sheet"

const Basic = () => {
  const { toggleSheet } = useSheet(1)
  const onClick = useCallback(() => toggleSheet(true), [toggleSheet])

  return (
    <>
      <button type="button" onClick={onClick}>
        Open Sheet
      </button>
      <Sheet id={1} isOpen>
        <SheetHeader title="Hey there, I'm a Sheet!" />
        <SheetBody>And I am the body of the sheet.</SheetBody>
      </Sheet>
    </>
  )
}

export default Basic
