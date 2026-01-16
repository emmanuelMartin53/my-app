import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import GetAllByRole from "./GetAllByRole";


describe("Test to learn GetAllByRole", () => {

  const buttons = ["Bouton 1","Bouton 2","Bouton 3"]

  test("UL element renders correctly", () => {
    render(<GetAllByRole btns={buttons}/>)
    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument()
  })

  test("LI element renders correctly", () => {
    render(<GetAllByRole btns={buttons}/>)
    const liElements = screen.getAllByRole('listitem');
    expect(liElements).toHaveLength(buttons.length)
  })

  test("Should Have multiple buttons", () => {
    render(<GetAllByRole btns={buttons}/>)
    const inputButttonsElements = screen.getAllByRole('button');
    expect(inputButttonsElements).toHaveLength(buttons.length)
  })

})
