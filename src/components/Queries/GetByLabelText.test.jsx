import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import GetByRole from './GetByRole'
import GetByLabelText from './GetByLabelText'


describe('GetByLabelText', () => {

  test('Elements rendus correctement', () => {
    render(<GetByLabelText />)

    const inputElementFirstName = screen.getByLabelText(/Prénom/i);
    expect(inputElementFirstName).toBeInTheDocument()

    const inputElementLastName = screen.getByLabelText('Nom');
    expect(inputElementLastName).toBeInTheDocument()

    const inputElementUsername = screen.getByLabelText('Username');
    expect(inputElementUsername).toBeInTheDocument()

    const inputCheckboxTerms = screen.getByLabelText(/J'accepte les termes et conditions/i);
    expect(inputCheckboxTerms).toBeInTheDocument();

    const inputCheckboxNewsLetter = screen.getByLabelText(/Je m'abonne à la news letter/i);
    expect(inputCheckboxNewsLetter).toBeInTheDocument();

    const input = screen.getByLabelText('Animal préféré', {selector: 'input'});
    expect(input).toBeInTheDocument()

    const textarea = screen.getByLabelText('Animal préféré', {selector: 'textarea'});
    expect(textarea).toBeInTheDocument()

  })

})
