import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './App.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const addToDo = () => {
    if (task.trim() && description.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: task, description: description, completed: false }
      ]);
      setTask('');
      setDescription('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={addToDo}>Add</button>
      <div>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
