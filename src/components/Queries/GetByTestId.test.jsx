import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import GetByTestId from './GetByTestId'



describe('GetByTextid', () => {

  test('Elements rendus correctement', () => {
    render(<GetByTestId />)

    const customBtn =  screen.getByTestId("custom-element")
    expect(customBtn).toBeInTheDocument()

    const divElement =  screen.getByTestId("div-element")
    expect(divElement).toBeInTheDocument()

  })

})
