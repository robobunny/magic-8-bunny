import React from 'react';
import Modal from 'react-modal';

const HelpModal = (props) => {
  return (
    <Modal
      isOpen={props.helpModal}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={250}
      className="modal"
    >
      <img type="image/png" src="bunny-fill-128-sq.png" alt="Robobunny"></img>
      <h3>Magic 8 Bunny</h3>
      <p>Use the "Add response" field to add a possible answer to Robobunny's psychic repertoire.</p>
      <p>Type a question and press the "Answer" button to receive an answer from Robobunny.</p>
      <p>You can click "Add default Asnwers" to add a couple basic answers to the list, but this is decidely no fun.</p>
      <p>All answers guaranteed to be existentially accurate, ontologically insightful, and legally binding.</p>
      <button
        onClick={props.closeModal}
      >OK</button>
    </Modal>
  );
};

export default HelpModal;