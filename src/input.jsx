import React from "react";

function Input(props) {
  return (
    <>
      {props.label && <label htmlFor={props.id}>{props.labelName}</label>}
      <br />
      <input
        value={props.value || ""}
        id={props.id}
        className={props.className}
        type={props.type || "text"}
        onChange={props.onChange || (() => {})}
      />
    </>
  );
}

export default Input;
