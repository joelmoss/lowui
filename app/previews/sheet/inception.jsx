/* eslint-disable react/jsx-no-bind */

import Sheet, { SheetBody, SheetHeader, useSheet } from "@lowui/sheet"

const InceptionSheet = () => {
  const { toggleSheet } = useSheet(1)
  const { toggleSheet: toggleSecondSheet } = useSheet(2)

  return (
    <div>
      <button type="button" onClick={() => toggleSheet(true)}>
        Open Sheet
      </button>
      <Sheet id={1}>
        <SheetHeader title="A Sheet" />
        <SheetBody>
          <button type="button" onClick={() => toggleSecondSheet(true)}>
            Click here
          </button>{" "}
          to open another Sheet
        </SheetBody>
      </Sheet>
      <Sheet id={2}>
        <SheetHeader title="Sheetception!! 😱" />
      </Sheet>
    </div>
  )
}

export default InceptionSheet
