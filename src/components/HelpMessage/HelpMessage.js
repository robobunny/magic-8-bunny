import React from "react"
import Modal from "react-modal"

const HelpMessage = props => {
  return (
    <Modal
      isOpen={props.helpModal}
      onRequestClose={props.closeModal}
      closeTimeoutMS={250}
      contentLabel="help-content"
      className="modal">
      <img
        type="image/png"
        src="%PUBLIC_URL%/bunny-fill-128-sq.png"
        alt="A cute green robotic-looking bunny character"
      />
      <h3>Magic 8 Bunny</h3>
      <div className="help-text">
        <p>
          Use the "Add response" field to add a possible answer to Robobunny's psychic repertoire.
        </p>
        <p>Type a question and press the "Answer" button to receive an answer from Robobunny.</p>
        <p>
          You can click "Add default Answers" to add a couple basic answers to the list, but this is
          decidely no fun.
        </p>
        <p>
          All answers guaranteed to be existentially accurate, ontologically insightful, and legally
          binding.
        </p>
      </div>
      <button onClick={props.closeModal}>OK</button>
    </Modal>
  )
}

export default HelpMessage
