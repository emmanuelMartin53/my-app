import { describe, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IncrementCount from "./IncrementCount";



/*
tab: [Function: tab],
keyboard: [Function: keyboard],
copy: [Function: copy],
cut: [Function: cut],
paste: [Function: paste],
pointer: [Function: pointer],
clear: [Function: clear],
deselectOptions: [Function: deselectOptions],
selectOptions: [Function: selectOptions],
type: [Function: type],
upload: [Function: upload],
setup: [Function: bound setupSub]

1) Convinience APIs
*********************
Interaction avec la souris
- click()
- dblClick
- tripleClick
Les mouvements de la souris
- hover
- unhover

2) Pointer APIs
 Voir la doc : https://testing-library.com/docs/user-event/pointer
*/



describe('Learn Mouse User Interactions', () => {

  test("Compteur, bouton et checkbox s'affichent dans le DOM", () => {
    render(<IncrementCount />)

    const headingElementH1 = screen.getByRole("heading");
    expect(headingElementH1).toBeInTheDocument()
    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/});
    expect(buttonElement).toBeInTheDocument()
    const checkbox = screen.getByRole("checkbox", {name: /j'accepte les termes et conditions/i});
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

  })

  test('Avant le clic, le bouton et le comteur affichent 0 & bouton désactivé', () => {
    render(<IncrementCount />)
    const displayValueH1 = screen.getByRole("heading");
    expect(displayValueH1).toHaveTextContent("0")

    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 0 fois")
    expect(buttonElement).toBeDisabled()
    expect(buttonElement).toHaveStyle({backgroundColor: 'rgb(255, 165, 0)'})

  })


  test("display color 'blue' for button", async () => {
    const user = userEvent.setup();
    render(<IncrementCount />)
    const checkbox = screen.getByRole("checkbox", {name: /j'accepte les termes et conditions/i});
    await user.click(checkbox)


    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toBeEnabled()

    await user.click(buttonElement)
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 1 fois")

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('1')

    expect(buttonElement).toHaveStyle({backgroundColor: 'rgb(0, 0, 255)'})



  })


  // test("display color 'orange' for button after 2 click", async () => {
  //     render(<IncrementCount />)

  //     const user = userEvent.setup();

  //     const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/});
  //     await user.dblClick(buttonElement)
  //     expect(buttonElement).toHaveTextContent("Vous avez cliqué 2 fois")

  //     const headingElement = screen.getByRole('heading')
  //     expect(headingElement).toHaveTextContent('2')

  //     expect(buttonElement).toHaveStyle({backgroundColor: 'rgb(255, 165, 0)'})
  // })


  test("Afficher le bouton après que le checkbox soit coché , ensuite le cacher après checkbox décoché", async () => {
    const user = userEvent.setup();
    render(<IncrementCount />)

    const checkbox = screen.getByRole("checkbox", {name: /j'accepte les termes et conditions/i});
    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toBeEnabled()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(buttonElement).toBeDisabled()


    await user.dblClick(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(buttonElement).toBeDisabled()

  })



  test("Compteur et bouton affichent 3 après un clic + un dblClick + couleur du bouton change en bleu", async () => {
    const user = userEvent.setup();
    render(<IncrementCount />)

    const checkbox = screen.getByRole("checkbox", {name: /j'accepte les termes et conditions/i});
    await user.click(checkbox)

    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toBeEnabled()

    await user.click(buttonElement)
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 1 fois")

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('1')
    expect(buttonElement).toHaveStyle({backgroundColor: 'rgb(0, 0, 255)'})

    await user.dblClick(buttonElement)
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 3 fois");
    expect(headingElement).toHaveTextContent('3')
    expect(buttonElement).toHaveStyle({backgroundColor: 'rgb(0, 0, 255)'})

    await user.click(checkbox)
    expect(buttonElement).toBeDisabled()
  })


  test("le popup est caché avant le MouseOver", () => {
    render(<IncrementCount />)

    const popup = screen.queryByText(/fugit id facere/i)
    expect(popup).not.toBeInTheDocument()
    expect(popup).toBeNull()
  })


  test("le popup s'affiche avec le MouseOver et s'efface après le MouseOut", async () => {
    const user = userEvent.setup()
    render(<IncrementCount />)

    //Hover
    const termsConditions = screen.getByText(/les termes et conditions/i)
    expect(termsConditions).toBeInTheDocument()
    await user.hover(termsConditions)

    const popup = screen.queryByText(/fugit id facere/i)
    expect(popup).toBeInTheDocument()
    await user.unhover(termsConditions)

    expect(popup).not.toBeInTheDocument()


  })
})
