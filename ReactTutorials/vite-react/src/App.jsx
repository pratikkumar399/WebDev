import styles from "./styles";

import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  const addTasks = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: inputValue,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTasks = (taskName) => {
    setTodoList(todoList.filter((task) => task.id === taskName));
  }
  return (
    <div className="text-center">
      <div className="text-center w-84">
        <input onChange={handleInput} className="w-1/3 border-4 border-sky-800" type="text" />
        <button onClick={addTasks} className={styles.style3}>Add Task</button>
      </div>
      <div>
        {todoList.map((tasks) => {
          return <div>
            <h1 className={styles.style1}>{tasks.taskName}</h1>
            <button className={styles.style4} onClick={() => deleteTasks(tasks)}>X</button>
          </div>
        })}
      </div>
    </div >
  )
}


export default App


