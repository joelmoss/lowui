import { createModel } from 'ibiza'

export default createModel('sheets', () => ({
  instances: {},

  toggle(_, id, isOpen) {
    this.instances[id] = isOpen
  }
}))
