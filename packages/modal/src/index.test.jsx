import { render, screen, waitFor } from "@testing-library/react"

import { useModal } from "./hooks"
import Modal from "."

test("closed by default", () => {
  render(
    <Modal id={1}>
      <div>withinTheModal</div>
    </Modal>
  )

  expect(screen.queryByText("withinTheModal")).not.toBeInTheDocument()
})

test("opening", async () => {
  const App = () => {
    const { toggleModal } = useModal(1)

    return (
      <>
        <button type="button" onClick={() => toggleModal(true)}>
          Open Modal
        </button>
        <Modal id={1}>
          <div>withinTheModal</div>
        </Modal>
      </>
    )
  }

  const { user } = setup(<App />)

  await user.click(screen.getByText("Open Modal"))

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument()
})

test("canClose prop", async () => {
  render(
    <Modal id="canCloseProp" isOpen canClose={false}>
      <div>withinTheModal</div>
    </Modal>
  )

  await waitFor(() => {
    expect(screen.queryAllByRole("button")).toStrictEqual([])
  })

  expect(document.body).toMatchSnapshot()
})

test("isOpen prop", async () => {
  render(
    <Modal id={1} isOpen>
      withinTheModal
    </Modal>
  )

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument()
})

test("onExit prop", async () => {
  const onExit = jest.fn()

  const App = () => {
    const { toggleModal } = useModal(1)

    return (
      <>
        <button type="button" onClick={() => toggleModal(false)}>
          Close Modal
        </button>
        <Modal id={1} isOpen onExit={onExit}>
          <div>withinTheModal</div>
        </Modal>
      </>
    )
  }

  const { user } = setup(<App />)

  await user.click(screen.getByText("Close Modal"))

  expect(onExit).toHaveBeenCalled()
})

test("multiple modals", async () => {
  const ModalOne = () => {
    return (
      <Modal id="modal1" isOpen>
        Modal1
      </Modal>
    )
  }

  const ModalTwo = () => {
    return <Modal id="modal2">Modal2</Modal>
  }

  const App = () => {
    return (
      <>
        <ModalOne />
        <ModalTwo />
      </>
    )
  }

  render(<App />)

  expect(await screen.findByText("Modal1")).toBeInTheDocument()
  expect(screen.queryByText("Modal2")).not.toBeInTheDocument()
})
