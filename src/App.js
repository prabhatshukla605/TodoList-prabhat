import React, { useState } from "react";

import FormComponent from "./Components/FormComponent";
import ListComponent from "./Components/ListComponent";
import "./style.css";

function App() {
  const [todos, setTodos] = useState([{}]);
  // const todos = [
  //   { text: "running", id: "id1" },
  //   { text: "cycling", id: "id2" },
  // ];

  function addTodo(data) {
    setTodos((prevVal) => {
      const updatedVal = [...prevVal];
      updatedVal.unshift({ text: data, id: Math.random().toString() });
      return updatedVal;
    });
  }
  
  function deleteItems(id) {
    setTodos(prevVal => {
      const updatedVal = prevVal.filter(items => items.id !== id);
      return updatedVal;
    })
  }

  return (
    <div className="main-div">
      <div className="input-div">
        <FormComponent onUpdate={addTodo} />
      </div>
      <div className="todo-div">
        <ListComponent items={todos} onDelete={deleteItems} />
      </div>
    </div>
  );
}

export default App;
