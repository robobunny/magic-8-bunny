import React from "react"
import AskQuestion from "../../components/AskQuestion/AskQuestion"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockPickFate = jest.fn()
mockPickFate.mockImplementation(() => Math.random())
afterEach(() => {
  mockPickFate.mockClear()
})

describe("AskQuestion component", () => {
  test("should display text input and button", () => {
    const { getByLabelText, getByText } = render(
      <AskQuestion hasOptions={false} pickFate={mockPickFate} />
    )
    const inputField = getByLabelText("Ask a question:")
    const submitButton = getByText("Ask Robobunny!")
    expect(inputField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})

describe("when there are no Options", () => {
  test("submit button should be disabled", () => {
    const { getByText } = render(<AskQuestion hasOptions={false} pickFate={mockPickFate} />)
    const submitButton = getByText("Ask Robobunny!")
    expect(submitButton).toBeDisabled()
  })
  test("should not allow submission on press enter", () => {
    const { getByLabelText } = render(<AskQuestion hasOptions={false} pickFate={mockPickFate} />)
    const inputField = getByLabelText("Ask a question:")
    userEvent.type(inputField, "Test Question 1{enter}")
    expect(mockPickFate).not.toHaveBeenCalled()
  })
})

describe("when there are options", () => {
  test("should ask the question when button is clicked", () => {
    const { getByLabelText, getByText } = render(
      <AskQuestion hasOptions={true} pickFate={mockPickFate} />
    )
    const inputField = getByLabelText("Ask a question:")
    const submitButton = getByText("Ask Robobunny!")
    userEvent.type(inputField, "Test Question 1")
    userEvent.click(submitButton)
    expect(mockPickFate).toHaveBeenCalled()
  })

  test("should ask the question when enter is pressed", () => {
    const { getByLabelText } = render(<AskQuestion hasOptions={true} pickFate={mockPickFate} />)
    const inputField = getByLabelText("Ask a question:")
    userEvent.type(inputField, "Test Question 1{enter}")
    expect(mockPickFate).toHaveBeenCalled()
  })
})
