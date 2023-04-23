import React, { useState } from "react";
import "./FormComponent.css";

function FormComponent(props) {
  const [inputVal, setInputVal] = useState('');

  const inputHandlder = (event) => setInputVal(event.target.value);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputVal.length > 0) {
      props.onUpdate(inputVal);
    }
    else {
      return;
    }
    
  };
  return (
    <form>
      <label>To Do List</label>
      <input type="text" onChange={inputHandlder}></input>
      <button type="submit" onClick={formSubmitHandler}>
        ADD
      </button>
    </form>
  );
}

export default FormComponent;
