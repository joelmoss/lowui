/* eslint-disable no-undef */

import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import "@testing-library/jest-dom"

global.setup = (jsx) => {
  return {
    user: userEvent.setup(),
    ...render(jsx)
  }
}
