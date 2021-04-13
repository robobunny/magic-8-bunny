import React from "react"
import HelpMessage from "../../components/HelpMessage/HelpMessage"
import { render, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockCloseModal = jest.fn()

describe("HelpMessage component", () => {
  test("should be displayed", () => {
    const { getByText, getByAltText } = render(
      <HelpMessage helpModal={true} closeModal={mockCloseModal} />
    )
    const helpText = getByText(/use the \"Add response\"/i)
    expect(helpText).toBeInTheDocument()
    const okButton = getByText(/ok/i)
    expect(okButton).toBeInTheDocument()
    const bunnyPic = getByAltText("A cute green robobunny character with square glasses")
    expect(bunnyPic).toBeInTheDocument()
    cleanup()
  })
  test("should call closeModal when button is clicked", () => {
    const { getByText } = render(<HelpMessage helpModal={true} closeModal={mockCloseModal} />)
    const okButton = getByText(/ok/i)
    userEvent.click(okButton)
    expect(mockCloseModal).toHaveBeenCalled()
  })
})
