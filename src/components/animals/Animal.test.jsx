import { render, screen } from '@testing-library/react'
import Animal from './Animal'
import { describe, expect } from 'vitest'


describe('GetByRole', () => {

  test('Affiche le texte Adopter un animal', () => {
    render(<Animal />)
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument()
  })

  test('Article rendu correctement', () => {
    render(<Animal />)
    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();

  })

  test('Image rendue correctement', () => {
    render(<Animal />)
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  })

  test('Input rendu correctement', () => {
    render(<Animal />)
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument()
  })

   test('Select rendu correctement', () => {
    render(<Animal />)
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument()
  })

  test('Checkbox rendu correctement', () => {
    render(<Animal />)
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  })

  test('Button rendu correctement',  () => {
    render(<Animal />)
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument()
  })
})
