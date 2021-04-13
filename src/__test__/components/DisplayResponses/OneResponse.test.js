import React from "react"
import OneResponse from "../../../components/DisplayResponses/OneResponse"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const mockRemoveOneOption = jest.fn()

describe("OneResponse component", () => {
  test("should display the text of the response", () => {
    const { getByText } = render(
      <OneResponse
        key={1}
        optionText="Test response 1"
        index={1}
        removeOneOption={mockRemoveOneOption}
      />
    )
    const optionText = getByText(/test response/i)
    expect(optionText).toBeInTheDocument()
  })
  test("should display remove button", () => {
    const { getByText } = render(
      <OneResponse
        key={1}
        optionText="Test response 1"
        index={1}
        removeOneOption={mockRemoveOneOption}
      />
    )
    const removeButton = getByText("Remove")
    expect(removeButton).toBeInTheDocument()
  })
  test("should call the removeOneOption function with correct index when remove button is clicked", () => {
    const { getByText } = render(
      <OneResponse
        key={1}
        optionText="Test response 1"
        index={1}
        removeOneOption={mockRemoveOneOption}
      />
    )
    const removeButton = getByText("Remove")
    userEvent.click(removeButton)
    expect(mockRemoveOneOption).toHaveBeenCalled()
  })
})
