import React from 'react';

const Action = (props) => {
    return (
        <div className="form">
        <h3>Ask a question:</h3>
            <form
                className="action-form"
                disabled={!props.hasOptions}
                onSubmit={props.pickFate}>
                <input type="text" placeholder="Ask Robobunny a yes-or-no question..." />
                <button
                    className="primary"
                >
                    Ask Robobunny!
                </button>
            </form>
        </div>
    );
}

export default Action;