import React from "react";
import "./ListComponent.css";

function ListComponent(props) {

  const itemDeleteHandler = (event) => props.onDelete(event.target.id);

  return (
    <ul>
      {props.items.map(currItems => <li key={currItems.id}
          id={currItems.id} onClick={itemDeleteHandler}>{currItems.text}</li>)}
    </ul>
  );
}

export default ListComponent;
