import { createModel } from 'ibiza'

export default createModel('modals', () => ({
  instances: {},

  toggle(_, id, isOpen) {
    this.instances[id] = isOpen
  }
}))
