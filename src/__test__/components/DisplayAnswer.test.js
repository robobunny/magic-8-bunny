import React from "react"
import DisplayAnswer from "../../components/DisplayAnswer/DisplayAnswer"
import { cleanup, getAllByText, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockCloseModal = jest.fn()

describe("DisplayAnswer component", () => {
  test("should display the selected answer", () => {
    const { getByText, getByAltText } = render(<DisplayAnswer selectedOption="Test response 1" />)
    const displayedAnswer = getByText(/Test response 1/)
    expect(displayedAnswer).toBeVisible()
    const acceptButton = getByText("I accept your wisdom!")
    expect(acceptButton).toBeVisible()
    const bunnyPic = getByAltText("A cute green robobunny character with square glasses")
    expect(bunnyPic).toBeVisible()
    cleanup()
  })

  test("should display modal only when selected answer is given", () => {
    const { queryByText, queryByAltText } = render(<DisplayAnswer selectedOption={undefined} />)
    const bunnyPic = queryByAltText("A cute green robobunny character with square glasses")
    expect(bunnyPic).not.toBeInTheDocument()
    const heading = queryByText(/Robobunny has spoken/)
    expect(heading).not.toBeInTheDocument()
    cleanup()
  })

  test("should call closeModal method when button is pressed", () => {
    const { getByText } = render(
      <DisplayAnswer selectedOption="Test response 1" closeModal={mockCloseModal} />
    )
    const acceptButton = getByText("I accept your wisdom!")
    userEvent.click(acceptButton)
    expect(mockCloseModal).toHaveBeenCalled()
    cleanup()
  })
})
