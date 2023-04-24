import React from "react";
import "./ListComponent.css";

function ListComponent(props) {

  const itemDeleteHandler = (event) =>props.onDelete(event.target.value);

  return (
    <ul>
      {props.items.map(currItems => <li key={currItems.id}
          id={currItems.id} >{currItems.text}<button value={currItems.id} className="delete-button" onClick={itemDeleteHandler}>Done</button></li>)}
    </ul>
  );
}

export default ListComponent;
