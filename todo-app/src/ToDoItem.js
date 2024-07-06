import React from 'react';
import './App.css';

const ToDoItem = ({ todo, toggleComplete, deleteToDo }) => {
  return (
    <div className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-item-checkbox"
        />
        <span>{todo.text}</span>
        <div className="todo-item-description">{todo.description}</div>
      </div>
      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
