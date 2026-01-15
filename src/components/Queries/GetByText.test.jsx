import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
// import GetByRole from './GetByRole'
// import GetByLabelText from './GetByLabelText'
// import GetByPlaceholderText from './getByPlaceholderText'
import GetByText from './GetByText'


describe('GetByText', () => {

  test('Elements rendus correctement', () => {
    render(<GetByText />)

      const inputButtonTheme = screen.getByText('Changer la couleur');
      expect(inputButtonTheme).toBeInTheDocument()

      const inputSubmitButton = screen.getByText('Valider');
      expect(inputSubmitButton).toBeInTheDocument()


      const introParagraph = screen.getByText('Veuillez indiquer votre identité');
      expect(introParagraph).toBeInTheDocument()

  })

})
