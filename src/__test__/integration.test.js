import React from "react"
import { render, cleanup, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../components/App"

describe("Adding a response and asking a question", () => {
  test("should add a new response and respond to a question with that response", async () => {
    const { getByPlaceholderText, queryByText, findByText } = render(<App />)
    const responseInput = getByPlaceholderText(/Add a wise response.../)
    userEvent.type(responseInput, "Test response 1{enter}")
    const response = await findByText("Test response 1")
    expect(response).toBeInTheDocument()
    const questionInput = getByPlaceholderText(/Ask Robobunny a yes/)
    userEvent.type(questionInput, "Test question 1{enter}")
    const answer = await findByText("Test response 1!")
    expect(answer).toBeInTheDocument()
    const acceptButton = await findByText(/I accept/)
    userEvent.click(acceptButton)
    const isTheAnswerGone = () => queryByText("Test response 1!") === null
    expect(isTheAnswerGone()).toBe(true)
  })
})
