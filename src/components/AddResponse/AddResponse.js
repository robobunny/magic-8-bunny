import React, { useState } from "react"

const AddResponse = props => {
  const [error, setError] = useState(undefined)

  const formSubmit = e => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const err = props.addOption(option)
    setError(err)
    if (!err) {
      e.target.elements.option.value = ""
    }
  }

  return (
    <div className="form">
      <form onSubmit={formSubmit}>
        <label>
          Add a response:
          <input
            type="text"
            name="option"
            id="option-input"
            placeholder="Add a wise response..."
            autoFocus={true}
          />
          <button>Add Option</button>
        </label>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default AddResponse
