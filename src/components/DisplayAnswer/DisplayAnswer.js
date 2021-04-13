import React from "react"
import Modal from "react-modal"
import robobunny from "../../img/bunny-fill-128.png"

const DisplayAnswer = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={250}
      className="modal">
      <img
        type="image/png"
        src={robobunny}
        alt="A cute green robobunny character with square glasses"
      />
      <h3>Robobunny has spoken:</h3>
      <p>{props.selectedOption}!</p>
      <button onClick={props.closeModal}>I accept your wisdom!</button>
    </Modal>
  )
}

export default DisplayAnswer
