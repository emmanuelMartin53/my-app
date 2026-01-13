import { render, screen } from '@testing-library/react'
import Animal from './Animal'
import { describe, expect } from 'vitest'


describe('Elements rendus correctement', () => {

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
})
