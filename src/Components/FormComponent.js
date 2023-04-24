import React, { useState } from "react";
import "./FormComponent.css";

function FormComponent(props) {
  const [inputVal, setInputVal] = useState('');

  const inputHandlder = (event) => setInputVal(event.target.value);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputVal.trim().length > 0) {
      props.onUpdate(inputVal);

    }
    else {
      alert('Please enter the value');
      return;
    }
    
  };
  return (
    <form>
      <label>To Do List</label>
      <input type="text" onChange={inputHandlder}></input>
      <button className="add-button" type="submit" onClick={formSubmitHandler}>
        ADD
      </button>
    </form>
  );
}

export default FormComponent;
