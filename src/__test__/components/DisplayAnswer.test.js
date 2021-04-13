import React from "react"
import DisplayAnswer from "../../components/DisplayAnswer/DisplayAnswer"
import { getAllByText, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockCloseModal = jest.fn()
mockCloseModal.mockImplementation(() => "foobar")

describe("DisplayAnswer component", () => {
  //   describe("when there is an answer selected", () => {
  //     const { getByAltText, getByText, unmount } = render(
  //       <DisplayAnswer selectedOption={"Test answer 1"} closeModal={mockCloseModal} />
  //     )
  //     test("should display image", () => {
  //       const roboBunny = getByAltText("A cute green robobunny character with square glasses")
  //       expect(roboBunny).toBeInTheDocument()
  //     })

  //     test("should display text", () => {
  //       const answerText = getByText(/test answer/i)
  //       expect(answerText).toBeInTheDocument()
  //     })

  //     test("should display button", () => {
  //       const acceptButton = getByText("I accept your wisdom!")
  //       expect(acceptButton).toBeInTheDocument()
  //     })

  //     test("should close modal on button click", () => {
  //       const acceptButton = getByText("I accept your wisdom!")
  //       userEvent.click(acceptButton)
  //       expect(mockCloseModal).toHaveBeenCalled()
  //     })

  //     unmount()
  //   })

  //   describe("when there is no option selected", () => {
  //     const { queryByAltText, queryByText, unmount } = render(
  //       <DisplayAnswer selectedOption={undefined} closeModal={mockCloseModal} />
  //     )
  //     const roboBunny = queryByAltText("A cute green robobunny character with square glasses")
  //     const answerText = queryByText(/test answer/i)
  //     const acceptButton = queryByText("I accept your wisdom!")

  //     test("should not display anything", () => {
  //       expect(roboBunny).not.toBeInTheDocument()
  //       expect(answerText).not.toBeInTheDocument()
  //       expect(acceptButton).not.toBeInTheDocument()
  //     })
  //     unmount()
  //   })
  test("expect there to be tests", () => {
    expect(false).toBe(true)
  })
})
