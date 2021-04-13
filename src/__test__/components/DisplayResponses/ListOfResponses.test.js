import React from "react"
import ListOfResponses from "../../../components/DisplayResponses/ListOfResponses"
import { cleanup, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const testOptions = ["Test response 0", "Test response 1", "Test response 2"]
const mockPopulateList = jest.fn()

describe("displaying options when options.length > 0", () => {
  test("should render all the options", () => {
    const { getByText } = render(<ListOfResponses options={testOptions} />)
    const infoText = getByText(/knows 3/i)
    expect(infoText).toBeInTheDocument()
    const option0 = getByText(/response 0/)
    expect(option0).toBeInTheDocument()
    const option1 = getByText(/response 1/)
    expect(option1).toBeInTheDocument()
    const option2 = getByText(/response 2/)
    expect(option2).toBeInTheDocument()
    const removeAllButton = getByText(/remove all/i)
    expect(removeAllButton).toBeInTheDocument()
  })
  cleanup()
})

describe("displaying message when there are no options", () => {
  test("should display an info message", () => {
    const { getByText } = render(<ListOfResponses options={[]} />)
    const infoText = getByText(/add a possible/i)
    expect(infoText).toBeInTheDocument()
  })
  cleanup()
})

describe("removing all options", () => {
  test("should call removeAllOptions functions when Remove all button is clicked", () => {
    const { queryByText } = render(<ListOfResponses options={[]} />)
    const removeAllButton = queryByText(/remove all/i)
    const option0 = queryByText(/response 0/)
    const option1 = queryByText(/response 1/)
    const option2 = queryByText(/response 2/)
    userEvent.click(removeAllButton)
    expect(option0).not.toBeInTheDocument()
    expect(option1).not.toBeInTheDocument()
    expect(option2).not.toBeInTheDocument()
  })
  cleanup()
})

describe("Add default options button", () => {
  test("should appear when deafults not populated", () => {
    const { getByText } = render(<ListOfResponses options={[]} />)
    const addDefaultsButton = getByText(/Add default/i)
    expect(addDefaultsButton).toBeInTheDocument()
    cleanup()
  })

  test('should not appear when "popBtnClicked" is true', () => {
    const { queryByText } = render(<ListOfResponses options={[]} popBtnClicked={true} />)
    const addDefaultsButton = queryByText(/Add default/i)
    expect(addDefaultsButton).not.toBeVisible()
    cleanup()
  })

  test("should call populateList function when clicked", async () => {
    const { getByText } = render(<ListOfResponses options={[]} populateList={mockPopulateList} />)
    const addDefaultsButton = getByText(/Add default/i)
    userEvent.click(addDefaultsButton)
    expect(mockPopulateList).toHaveBeenCalled()
    cleanup()
  })
})
