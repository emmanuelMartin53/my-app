
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import QueryByRole from "./QueryByRole";


describe('GetBy Vs QueryBy', () => {
  test('buttons render correctly', () => {
    render(<QueryByRole />)
    const buttonThemeDark = screen.getByRole('button', {name: "Dark"});
    expect(buttonThemeDark).toBeInTheDocument()

    const buttonThemeLight = screen.queryByRole('button', {name: "Light"});
    // expect(buttonThemeLight).not.toBeInTheDocument()
    // expect(buttonThemeLight).toBeFalsy()
    // expect(buttonThemeLight).not.toBeTruthy()
    expect(buttonThemeLight).toBeNull()



  })
})
