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

const user = userEvent.setup();
// console.log(user)


describe('Learn Mouse User Interactions', () => {

  test('Elements render correctly', () => {
    render(<IncrementCount />)

    const headingElementH1 = screen.getByRole("heading");
    expect(headingElementH1).toBeInTheDocument()

    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/});
    expect(buttonElement).toBeInTheDocument()

  })

    test('Elements render correctly display 0 before click', () => {
    render(<IncrementCount />)

    const displayValueH1 = screen.getByRole("heading");
    expect(displayValueH1).toHaveTextContent("0")

    const buttonElement = screen.getByRole("button", {name: /Vous avez cliqué \d+ fois/});
    expect(buttonElement).toHaveTextContent("Vous avez cliqué 0 fois")

  })
})
