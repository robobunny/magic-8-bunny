import React, { useState } from "react";

const AddResponse = (props) => {
  const [error, setError] = useState(undefined);

  const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const err = props.addOption(option);
    setError(err);
    if (!err) {
      e.target.elements.option.value = "";
    }
  };

  return (
    <div className="form">
      <h3>Add a response:</h3>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="option"
          placeholder="Add a wise response..."
          autoFocus={true}
        />
        <button>Add Option</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddResponse;
