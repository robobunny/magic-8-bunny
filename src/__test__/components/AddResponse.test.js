import React from "react"
import AddResponse from "../../components/AddResponse/AddResponse"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockAddOption = jest.fn()
mockAddOption.mockImplementation(string => string)

describe("AddResponse component", () => {
  test("should display input field and button", () => {
    const { getByLabelText, getByText } = render(<AddResponse />)
    const inputField = getByLabelText("Add a response:")
    const submitButton = getByText("Add Option")
    expect(inputField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  test("should add the option when button is clicked", () => {
    const { getByLabelText, getByText } = render(<AddResponse addOption={mockAddOption} />)
    const inputField = getByLabelText("Add a response:")
    const submitButton = getByText("Add Option")
    userEvent.type(inputField, "Test Option 1")
    userEvent.click(submitButton)
    expect(mockAddOption).toHaveBeenCalledWith("Test Option 1")
  })

  test("should add the option when enter is pressed", () => {
    const { getByLabelText, getByText } = render(<AddResponse addOption={mockAddOption} />)
    const inputField = getByLabelText("Add a response:")
    userEvent.type(inputField, "Test Option 1{enter}")
    expect(mockAddOption).toHaveBeenCalledWith("Test Option 1")
  })
})
