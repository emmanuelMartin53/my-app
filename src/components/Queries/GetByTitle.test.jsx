import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import GetByTitle from './GetByTitle'


describe('GetByDisplayValue', () => {

  test('Elements rendus correctement', () => {
    render(<GetByTitle />)

    const titleAA = screen.getByTitle('Adopter un animal')
    expect(titleAA).toBeInTheDocument()

    const reactLogo = screen.getByTitle('React Logo')
    expect(reactLogo).toBeInTheDocument()
  })

})
