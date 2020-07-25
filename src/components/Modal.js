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
            <img type="image/png" src="bunny-fill-128-sq.png" alt="Robobunny"></img>    
            <h3>_robobunny has spoken:</h3>
            <p>{props.selectedOption}!</p>
            <button
                onClick={props.closeModal}
            >I accept your wisdom!</button>
        </Modal>
    );
};

export default OptionModal;