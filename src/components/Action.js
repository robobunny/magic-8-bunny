import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button
                className="big-button primary"
                disabled={!props.hasOptions}
                onClick={props.pickFate}
            >
                What should I do?
            </button>
        </div>
    );
}

export default Action;