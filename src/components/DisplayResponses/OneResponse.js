import React from "react"

const OneResponse = props => {
  return (
    <div className="option-item">
      <p>{props.optionText}</p>
      <button className="remove-button" onClick={e => props.removeOneOption(props.index)}>
        Remove
      </button>
    </div>
  )
}

export default OneResponse
