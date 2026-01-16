import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
// import GetByRole from './GetByRole'
// import GetByLabelText from './GetByLabelText'
// import GetByPlaceholderText from './getByPlaceholderText'
import GetByText from './GetByText'


describe('GetByText', () => {

  test('Elements rendus correctement', () => {
    render(<GetByText />)
    // Matching String
      const inputButtonTheme = screen.getByText('Changer la couleur'); // full string Match
      expect(inputButtonTheme).toBeInTheDocument()

      const inputButtonTheme2 = screen.getByText("er la coul", {exact: false}); // Substring match
      expect(inputButtonTheme2).toBeInTheDocument()

      const inputButtonTheme3 = screen.getByText("Changer la couLeur", {exact: false}); // ignore case
      expect(inputButtonTheme3).toBeInTheDocument()

      const inputSubmitButton = screen.getByText('Valider');
      expect(inputSubmitButton).toBeInTheDocument()

      const introParagraph = screen.getByText('Veuillez indiquer votre identité');
      expect(introParagraph).toBeInTheDocument()


      // Matching a regex
      const introParagraph1 = screen.getByText(/indiquer/); // Substring match
      expect(introParagraph1).toBeInTheDocument()

      const introParagraph2 = screen.getByText(/^Veuillez indiquer votre identité$/); // full string match. ignore case
      expect(introParagraph2).toBeInTheDocument()

      const introParagraph3 = screen.getByText(/Veuillez i?ndiqUER votre identité/i); //regex
      expect(introParagraph3).toBeInTheDocument()


      // matching with a function

      // (content ?: string) => boolean

      const introParagraph4 = screen.getByText((content) => content.startsWith("Veuill")); // Substring match
      expect(introParagraph4).toBeInTheDocument()

  })

})
""
