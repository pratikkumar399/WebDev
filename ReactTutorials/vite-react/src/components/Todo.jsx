import styles from "../styles";
import Tasks from "./Tasks";
import { useState } from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const addTasks = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: inputValue,
            completed: false, // Initialize completed as false
        };
        setTodoList([...todoList, task]);
    };

    const deleteTasks = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        );
    };

    const uncompleteTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: false };
                } else {
                    return task;
                }
            })
        );
    };

    return (
        <div className="text-center">
            <div className="text-center w-84">
                <input
                    onChange={handleInput}
                    className="w-1/3 border-4 border-sky-800"
                    type="text"
                />
                <button onClick={addTasks} className={styles.style3}>
                    Add Task
                </button>
            </div>
            <div>
                {todoList.map((tasks) => {
                    return (
                        <div>
                            <Tasks
                                taskName={tasks.taskName}
                                id={tasks.id}
                                completed={tasks.completed}
                                deleteTasks={deleteTasks}
                                completeTask={completeTask}
                                uncompleteTask={uncompleteTask} // Pass uncompleteTask as a prop
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todo;
