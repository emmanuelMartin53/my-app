import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'

import GetByAltText from './GetByAltText'


describe('GetByDisplayValue', () => {

  test('Elements rendus correctement', () => {
    render(<GetByAltText />)

    const altTextImage = screen.getByAltText("Image d'un chien");
    expect(altTextImage).toBeInTheDocument();

    const btnImage = screen.getByAltText("Valider");
    expect(btnImage).toBeInTheDocument();

  })

})
