import React, { useState } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Mert's todo list</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
