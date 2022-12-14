/* eslint-disable no-console */
import { render, screen } from "@testing-library/react"

import { useModal } from "./hooks"
import Modal from "."

describe("useModal hook", () => {
  test("requires ID", () => {
    jest.spyOn(console, "error")
    console.error.mockImplementation(() => {})

    const App = () => {
      useModal()
      return null
    }

    expect(() => render(<App />)).toThrow("useModal() requires a unique instance ID")
    expect(console.error).toHaveBeenCalledTimes(3)

    console.error.mockRestore()
  })

  test("auto ID detection within", async () => {
    const Inner1 = () => {
      const { id } = useModal()

      return <div>Modal1 ID is {id}</div>
    }

    const Inner2 = () => {
      const { id } = useModal()

      return <div>Modal2 ID is {id}</div>
    }

    const Modal1 = () => {
      return (
        <Modal id={1} isOpen>
          <Inner1 />
        </Modal>
      )
    }

    const Modal2 = () => {
      return (
        <Modal id={2} isOpen>
          <Inner2 />
        </Modal>
      )
    }

    const App = () => {
      return (
        <>
          <Modal1 />
          <Modal2 />
        </>
      )
    }

    render(<App />)

    expect(await screen.findByText("Modal1 ID is 1")).toBeInTheDocument()
    expect(await screen.findByText("Modal2 ID is 2")).toBeInTheDocument()
  })

  test("toggling", async () => {
    const App = () => {
      const { toggleModal, isModalOpen } = useModal("toggling")

      return (
        <button type="button" onClick={() => toggleModal(!isModalOpen)}>
          {isModalOpen ? "Close" : "Open"} Modal
        </button>
      )
    }

    const { user } = setup(<App />)
    const button = screen.getByRole("button")

    expect(screen.getByText("Open Modal")).toBeInTheDocument()

    await user.click(button)

    expect(screen.getByText("Close Modal")).toBeInTheDocument()

    await user.click(button)

    expect(screen.getByText("Open Modal")).toBeInTheDocument()
  })

  test("multiple useModal(); same modal", async () => {
    const ModalOne = () => {
      const { toggleModal, isModalOpen } = useModal(3)

      return (
        <button type="button" data-testid="openButton" onClick={() => toggleModal(true)}>
          Open Modal from {isModalOpen ? "open" : "closed"}
        </button>
      )
    }

    const ModalTwo = () => {
      const { toggleModal, isModalOpen } = useModal(3)

      return (
        <button type="button" data-testid="closeButton" onClick={() => toggleModal(false)}>
          Close Modal from {isModalOpen ? "open" : "closed"}
        </button>
      )
    }

    const App = () => {
      return (
        <>
          <ModalOne />
          <ModalTwo />
        </>
      )
    }

    const { user } = setup(<App />)

    const openButton = screen.getByTestId("openButton")
    const closeButton = screen.getByTestId("closeButton")

    expect(openButton).toHaveTextContent("Open Modal from closed")
    expect(closeButton).toHaveTextContent("Close Modal from closed")

    await user.click(openButton)

    expect(openButton).toHaveTextContent("Open Modal from open")
    expect(closeButton).toHaveTextContent("Close Modal from open")

    await user.click(closeButton)

    expect(openButton).toHaveTextContent("Open Modal from closed")
    expect(closeButton).toHaveTextContent("Close Modal from closed")
  })
})
