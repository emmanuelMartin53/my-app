import { render, screen } from '@testing-library/react'
import App from './App'


test('affiche le texte Vite + React', () => {
  render(<App />)
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
})
