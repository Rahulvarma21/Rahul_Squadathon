import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTods] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // useEffect(()=>{
  //   axios.get("http://localhost:4060")
  //   .then((result) => setTods(result.data))
  //   .catch((err) => console.log(err))
  // })

  const add = () => {
    setTods([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const newfilteredArray = todos.filter((ele, i) => i !== index);
    setTods(newfilteredArray);
  };
  return (
    <div>
      <h1>TO-DO LIST</h1>
      <div>
        <input
          className="to-do-list"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="add todo"
        />
        <button className="add-button" onClick={add}>
          Add
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
