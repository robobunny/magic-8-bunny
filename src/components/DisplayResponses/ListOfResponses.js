import React from "react";
import OneResponse from "./OneResponse";

const ListOfResponses = (props) => {
  return (
    <div>
      <div className="options-header">
        <p>Robobunny knows {props.options.length} responses:</p>
        <button onClick={props.removeAllOptions}>Remove All</button>
      </div>
      <div className="options-list">
        {props.options.length === 0 && (
          <p className="italics">Add a possible response to get started!</p>
        )}
        {props.options.map((option, index) => (
          <OneResponse
            key={index}
            index={index}
            optionText={option}
            removeOneOption={props.removeOneOption}
          />
        ))}
      </div>
      <button
        className="big-button secret-button"
        hidden={props.popBtnClicked}
        onClick={props.populateList}
      >
        Add default responses
      </button>
    </div>
  );
};

export default ListOfResponses;
