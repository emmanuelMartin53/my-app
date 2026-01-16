import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import GetAllByTitle from "./GetAllByTitle";


describe('Test to leearn GetAllByTitle', () => {
    test('Should render two paragraphs with title attribut presentation', () => {
      render(<GetAllByTitle />)

    const paragraphs = screen.getAllByTitle('presentation');
    expect(paragraphs.length).toBe(2)
  })
})
