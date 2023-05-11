
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  const addTasks = () => {
    const newTasks = [...todoList, inputValue];
    setTodoList(newTasks);
  }

  return (
    <>
      <div className="text-center w-84">
        <input onChange={handleInput} className="w-1/3 border-4 border-sky-800" type="text" />
        <button onClick={addTasks}>Add Tasks</button>
      </div>
      <div>
        {inputValue}
      </div>
    </>
  )
}

export default App


