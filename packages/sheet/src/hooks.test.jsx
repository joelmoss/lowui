/* eslint-disable no-console */
import { fireEvent, render, screen } from '@testing-library/react'

import { useSheet } from './hooks'
import Sheet from '.'

describe('useSheet hook', () => {
  test('requires ID', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})

    const App = () => {
      useSheet()
      return null
    }

    expect(() => render(<App />)).toThrow('useSheet() requires a unique instance ID')
    expect(console.error).toHaveBeenCalledTimes(3)

    console.error.mockRestore()
  })

  test('auto ID detection within', async () => {
    const Inner1 = () => {
      const { id } = useSheet()

      return <div>Sheet1 ID is {id}</div>
    }

    const Inner2 = () => {
      const { id } = useSheet()

      return <div>Sheet2 ID is {id}</div>
    }

    const Sheet1 = () => {
      return (
        <Sheet id={1} isOpen>
          <Inner1 />
        </Sheet>
      )
    }

    const Sheet2 = () => {
      return (
        <Sheet id={2} isOpen>
          <Inner2 />
        </Sheet>
      )
    }

    const App = () => {
      return (
        <>
          <Sheet1 />
          <Sheet2 />
        </>
      )
    }

    render(<App />)

    expect(await screen.findByText('Sheet1 ID is 1')).toBeInTheDocument()
    expect(await screen.findByText('Sheet2 ID is 2')).toBeInTheDocument()
  })

  test('toggling', () => {
    const App = () => {
      const { toggleSheet, isSheetOpen } = useSheet('toggling')

      return (
        <button onClick={() => toggleSheet(!isSheetOpen)}>
          {isSheetOpen ? 'Close' : 'Open'} Sheet
        </button>
      )
    }

    render(<App />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('Open Sheet')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Close Sheet')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Open Sheet')
  })
})
