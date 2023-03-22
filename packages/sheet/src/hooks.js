import { createContext, useContext } from 'react'

import useModel from './model'

export const SheetContext = createContext({ id: undefined })

export const useSheetId = idFromArg => {
  const { id: idFromContext } = useContext(SheetContext)
  return idFromArg || idFromContext
}

export const useSheet = idFromArg => {
  const id = useSheetId(idFromArg)
  const model = useModel()

  if (!id) throw new Error('useSheet() requires a unique instance ID')

  return {
    id,
    isSheetOpen: model.instances[id],
    toggleSheet: isOpen => model.toggle(id, isOpen)
  }
}
