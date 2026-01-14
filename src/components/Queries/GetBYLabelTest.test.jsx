import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import GetByRole from './GetByRole'
import GetByLabelTest from './GetByLabelTest'


describe('GetByLabelTest', () => {

  test('Elements rendus correctement', () => {
    render(<GetByLabelTest />)

    // const headingElementH1 = screen.getByRole("heading", {level: 1});
    // expect(headingElementH1).toBeInTheDocument()

    // const headingElementH2 = screen.getByRole("heading", {level: 2});
    // expect(headingElementH2).toBeInTheDocument()

    // const articleElement = screen.getByRole('article');
    // expect(articleElement).toBeInTheDocument();

    // const imageElement = screen.getByRole('img');
    // expect(imageElement).toBeInTheDocument();

    const inputElementFirstName = screen.getByLabelText('Prénom');
    expect(inputElementFirstName).toBeInTheDocument()

    const inputElementLastName = screen.getByLabelText('Nom');
    expect(inputElementLastName).toBeInTheDocument()

    const inputElementUsername = screen.getByLabelText('Username');
    expect(inputElementUsername).toBeInTheDocument()

    // const selectElement = screen.getByRole('combobox');
    // expect(selectElement).toBeInTheDocument()

    // const inputCheckboxTerms = screen.getByRole('checkbox', { name: /J'accepte les termes et conditions/i});
    // expect(inputCheckboxTerms).toBeInTheDocument();

    const inputCheckboxTerms = screen.getByLabelText(/J'accepte les termes et conditions/i);
    expect(inputCheckboxTerms).toBeInTheDocument();

    const inputCheckboxNewsLetter = screen.getByLabelText(/Je m'abonne à la news letter/i);
    expect(inputCheckboxNewsLetter).toBeInTheDocument();

    // const buttonElement = screen.getByRole('button');
    // expect(buttonElement).toBeInTheDocument()


    const input = screen.getByLabelText('Animal préféré', {selector: 'input'});
    expect(input).toBeInTheDocument()

    const textarea = screen.getByLabelText('Animal préféré', {selector: 'textarea'});
    expect(textarea).toBeInTheDocument()

  })

})
