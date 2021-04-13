import React from "react"

const AskQuestion = props => {
  const pickAnAnswer = e => {
    e.preventDefault()
    if (props.hasOptions) {
      props.pickFate()
      e.target.elements.question.value = ""
    }
  }

  return (
    <div className="form">
      <form className="action-form" disabled={!props.hasOptions} onSubmit={pickAnAnswer}>
        <label>
          Ask a question:
          <input
            type="text"
            name="question"
            id="question-input"
            placeholder="Ask Robobunny a yes-or-no question..."
          />
          <button className="primary" disabled={!props.hasOptions}>
            Ask Robobunny!
          </button>
        </label>
      </form>
    </div>
  )
}

export default AskQuestion
