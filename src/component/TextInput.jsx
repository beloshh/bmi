import React from "react";
import "../css/bmi.css";

const TextInput = (props) => {
  return (
    <div>
      <input
        className="four"
        type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
