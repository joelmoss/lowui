/* eslint-disable react/prop-types */

import { fireEvent, render, screen } from '@testing-library/react'

import { useSheet } from './hooks'
import Sheet from '.'

test('closed by default', () => {
  render(
    <Sheet id={1}>
      <div>withinTheSheet</div>
    </Sheet>
  )

  expect(screen.queryByText('withinTheSheet')).not.toBeInTheDocument()
})

test('opening', async () => {
  const App = () => {
    const { toggleSheet } = useSheet(1)

    return (
      <>
        <button type="button" onClick={() => toggleSheet(true)}>Open Sheet</button>
        <Sheet id={1}>
          <div>withinTheSheet</div>
        </Sheet>
      </>
    )
  }

  render(<App />)

  fireEvent.click(screen.getByText('Open Sheet'))

  expect(await screen.findByText('withinTheSheet')).toBeInTheDocument()
})

test('isOpen prop', async () => {
  render(
    <Sheet id={1} isOpen>
      withinTheSheet
    </Sheet>
  )

  expect(await screen.findByText('withinTheSheet')).toBeInTheDocument()
})
