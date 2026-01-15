import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import GetByRole from './GetByRole'
import GetByLabelText from './GetByLabelText'
import GetByPlaceholderText from './getByPlaceholderText'


describe('GetByPlaceholderText', () => {

  test('Elements rendus correctement', () => {
    render(<GetByPlaceholderText />)

   const inputElementFirstname = screen.getByPlaceholderText('Indiquez votre prénom');
   expect(inputElementFirstname).toBeInTheDocument()

   const inputElementLastname = screen.getByPlaceholderText('Indiquez votre nom');
   expect(inputElementLastname).toBeInTheDocument()

  })

})
