import React from 'react';
import Option from './Option';

const PopulateListButton = (props) => {
    return <button
        className="big-button secret-button"
        hidden={props.popBtnClicked}
        onClick={props.populateList}
    >
        Add default responses
    </button>;
}

const OptionsList = (props) => {
    const optionsHeader = (
        <div className = "options-header">
            <p>Robobunny knows {props.options.length} responses:</p>
            <button onClick={props.removeAllOptions}>Remove All</button>
        </div>
    )
    
    const addResponseMessage = (
        <p className = "italics" >
            Add a possible response to get started!
        </p>
    )

    const listOfResponses = (
        props.options.map((option, index) =>
            <Option
                key={index}
                index={index}
                optionText={option}
                removeOneOption={props.removeOneOption}
            />
        )
    )

    return (
        <div>
            {optionsHeader}
            <div className="options-list">
                {
                    props.options.length === 0 ?
                    addResponseMessage :
                    listOfResponses
                }
            </div>
            <PopulateListButton
                popBtnClicked={props.popBtnClicked}
                populateList={props.populateList}
            />
        </div>
    );
}

export default OptionsList;


