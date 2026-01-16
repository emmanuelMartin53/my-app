import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import FindByRole from "./FindByRole";



describe('GetBy Vs QueryBy', () => {
  test('buttons render correctly', async () => {
    render(<FindByRole />)
    const buttonThemeDark = await screen.findByRole('button', {name: "Light"}, {timeout: 3000});
    expect(buttonThemeDark).toBeInTheDocument()



  })
})
