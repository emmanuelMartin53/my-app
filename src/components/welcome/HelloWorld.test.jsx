import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";


test("Render du composant helloWorld", () => {
  render(<HelloWorld />)
  const divElement = screen.getByText(/Hello World/i);
  expect(divElement).toBeInTheDocument()
})
