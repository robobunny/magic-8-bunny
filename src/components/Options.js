import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="options-header">
                <p>There are {props.options.length} options:</p>
                <button onClick={props.removeAllOptions}>Remove All</button>
            </div>
            <div className="options-list">
                {
                    props.options.length === 0 
                    && <p className="italics">
                        Add a possible course of action to get started!
                    </p>
                }
                {
                    props.options.map((option,index) => 
                        <Option 
                            key={index} 
                            index={index}
                            optionText={option}
                            removeOneOption={props.removeOneOption}
                        />
                    )
                }
            </div>
            <button 
                    className="big-button secret-button"
                    hidden={props.popBtnClicked} 
                    onClick={props.populateList}
                >
                    Unlock secret options
            </button>
        </div>
    );
}

export default Options;