import './App.css';
import { useState } from "react";
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  // [...1,2,3,4  , 5] -> [1,2,3,4,5]

  return (
    <div className="App">
      <ToDoList todos={todos}/>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
