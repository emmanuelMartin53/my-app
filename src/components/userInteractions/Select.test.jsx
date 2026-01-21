import { describe, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Exercice selectOptions & deselectOptions", () => {

  test("tester la sélection et la déselection des options", async () => {
    const user = userEvent.setup()
    const options = ["Chien","Chat","Tigre"]

    render(<Select options={options}/>)

    // Select Option 1 & option 2

    const select = screen.getByRole("listbox")
    const chien = screen.getByText("Chien")
    const chat = screen.getByText("Chat")

    expect(select).toBeInTheDocument()
    expect(chien).toBeInTheDocument()
    expect(chat).toBeInTheDocument()

    await user.selectOptions(select, ["Chien", "Chat"])
    expect(select).toHaveValue(["Chien", "Chat"])

    expect(screen.getByRole("option", {name: "Chien"}).selected).toBeTruthy()
    expect(screen.getByRole("option", {name: "Chien"}).selected).toBe(true)

    expect(screen.getByRole("option", {name: "Chat"}).selected).toBeTruthy()
    expect(screen.getByRole("option", {name: "Chat"}).selected).toBe(true)

    expect(screen.getByRole("option", {name: "Tigre"}).selected).toBeFalsy()
    expect(screen.getByRole("option", {name: "Tigre"}).selected).toBe(false)



    // Deselect
    await user.deselectOptions(select, chien)
    expect(select).toHaveValue(["Chat"])

    // Select
     const tigre = screen.getByText("Tigre")
     await user.selectOptions(select, tigre)
     expect(select).toHaveValue(["Chat", "Tigre"])
  })
})
