import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.closeModal}
            contentLabel="Selected Option"
            closeTimeoutMS={250}
            className="modal"
        >
            <h3>_robobunny has spoken:</h3>
            <p>You should {props.selectedOption}!</p>
            <button
                onClick={props.closeModal}
            >Ok I'll do it!</button>
        </Modal>
    );
};

export default OptionModal;