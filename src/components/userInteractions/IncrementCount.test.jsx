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
*********************

*/



describe('Learn Mouse User Interactions', () => {

  test("Compteur, bouton et checkbox s'affichent correctement", () => {
    render(<IncrementCount />)

    const headingElementH1 = screen.getByRole("heading");
    expect(headingElementH1).toBeInTheDocument()
    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/});
    expect(buttonElement).toBeInTheDocument()
    const checkbox = screen.getByRole("checkbox", {name: /j'accepte les termes et conditions/i});
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

  })

  test('Elements render correctly display 0 before click', () => {
    render(<IncrementCount />)

    const displayValueH1 = screen.getByRole("heading");
    expect(displayValueH1).toHaveTextContent("0")
    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 0 fois")

  })

  test("Bouton désactivé avant le clic", () => {
    render(<IncrementCount />)
    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 0 fois")
    expect(buttonElement).not.toBeEnabled()
  })


  test("Initial color 'orange' for button", () => {
    render(<IncrementCount />)
    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/i});
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
  })
})
