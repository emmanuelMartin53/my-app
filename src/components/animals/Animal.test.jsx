import { render, screen } from '@testing-library/react'
import Animal from './Animal'
import { describe, expect } from 'vitest'


describe('GetByRole', () => {

  test('Elements rendus correctement', () => {
    render(<Animal />)

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument()

    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument()

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument()

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument()

  })

})
