import { render, screen } from '@testing-library/react'
import Animal from './Animal'
import { describe, expect } from 'vitest'


describe('GetByRole', () => {

  test('Elements rendus correctement', () => {
    render(<Animal />)

    const headingElementH1 = screen.getByRole("heading", {level: 1});
    expect(headingElementH1).toBeInTheDocument()

    const headingElementH2 = screen.getByRole("heading", {level: 2});
    expect(headingElementH2).toBeInTheDocument()

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    const inputElementFirstName = screen.getByRole('textbox', {name: 'Prénom'});
    expect(inputElementFirstName).toBeInTheDocument()

    const inputElementLastName = screen.getByRole('textbox', {name: 'Nom'});
    expect(inputElementLastName).toBeInTheDocument()

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument()

    const inputCheckboxTerms = screen.getByRole('checkbox', { name: /J'accepte les termes et conditions/i});
    expect(inputCheckboxTerms).toBeInTheDocument();

    const inputCheckboxNewsLetter = screen.getByRole('checkbox', {name: /Je m'abonne à la news letter/i});
    expect(inputCheckboxNewsLetter).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument()

  })

})
