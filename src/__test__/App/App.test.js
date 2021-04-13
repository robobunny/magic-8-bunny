import React from "react"
import { render, cleanup, getByPlaceholderText } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../components/App"

describe("The App", () => {
  test("should display two input fields", () => {
    const { getByPlaceholderText } = render(<App />)
    const responseInput = getByPlaceholderText(/Add a wise response.../)
    expect(responseInput).toBeInTheDocument()
    const questionInput = getByPlaceholderText(/Ask Robobunny a yes-or-no question.../)
    expect(questionInput).toBeInTheDocument()
  })
  cleanup()
})

describe("Default responses", () => {
  test("should populate default responses", async () => {
    const { getByText, findByText } = render(<App />)
    const defaultButton = getByText(/Add default responses/)
    userEvent.click(defaultButton)
    const firstDefault = await findByText("Yes, of course!")
    const howManyResponses = await findByText(/Robobunny knows 7 responses/)
    expect(firstDefault).toBeInTheDocument()
    expect(howManyResponses).toBeInTheDocument()
  })
  cleanup()
})
