import { render, screen } from '@testing-library/react'
import App from './App'
import { expect } from 'vitest'

test('affiche le texte Vite + React', () => {
  render(<App />)
  expect(
    screen.getByRole("heading" ,{name: /Vite \+ React/i})
  ).toBeInTheDocument()

  expect(
    screen.getByRole("link", {name: /vite logo/i})
  ).toBeInTheDocument()

  expect(
    screen.getByRole("link", {name: /react logo/i})
  ).toBeInTheDocument()
})
