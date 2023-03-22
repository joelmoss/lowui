/* eslint-disable react/jsx-no-bind */

import Sheet from "@lowui/sheet"
import Body from "@lowui/sheet/body"
import Header from "@lowui/sheet/header"
import { useSheet } from "@lowui/sheet/hooks"

const InceptionSheet = () => {
  const { toggleSheet } = useSheet(1)
  const { toggleSheet: toggleSecondSheet } = useSheet(2)

  return (
    <div>
      <button type="button" onClick={() => toggleSheet(true)}>
        Open Sheet
      </button>
      <Sheet id={1}>
        <Header title="A Sheet" />
        <Body>
          <button type="button" onClick={() => toggleSecondSheet(true)}>
            Click here
          </button>{" "}
          to open another Sheet
        </Body>
      </Sheet>
      <Sheet id={2}>
        <Header title="Sheetception!! 😱" />
      </Sheet>
    </div>
  )
}

export default InceptionSheet
