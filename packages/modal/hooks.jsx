import { createContext, useContext } from 'react'

import useModel from './model'

export const ModalContext = createContext({ id: undefined })

export const useModalId = idFromArg => {
  const { id: idFromContext } = useContext(ModalContext)
  return idFromArg || idFromContext
}

export const useModal = idFromArg => {
  const id = useModalId(idFromArg)
  const model = useModel()

  if (!id) throw new Error('useModal() requires a unique instance ID')

  return {
    id,
    isModalOpen: model.instances[id],
    toggleModal: isOpen => model.toggle(id, isOpen)
  }
}
