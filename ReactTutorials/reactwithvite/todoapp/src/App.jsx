import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
    console.log("Item added")
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => t.id === id ? todo : t));
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {
      ...prevTodo,
      completed: !prevTodo.completed
    } : prevTodo))
  }

  // getting items from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // setting items to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, toggleComplete, deleteTodo, updateTodo, addTodo }}>
      <div className="bg-[#172842] h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                // using unique id as key, this helps in better performance
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              )
              )
            }
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
