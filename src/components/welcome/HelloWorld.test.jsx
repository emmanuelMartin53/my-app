
import { render, screen } from '@testing-library/react'
import HelloWorld from "./HelloWorld"


test('Affiche le composant HelloWorld', () => {
  render(<HelloWorld />)
  const divElement =  screen.getByText(/Hello World/i)
  expect(divElement).toBeInTheDocument()
})
