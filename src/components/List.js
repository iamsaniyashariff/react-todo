import React, { useState } from 'react';
import Form from './Form.js';
import Todo from './Todo.js';

function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo.text,
      isComplete: false,
    };

    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? { ...item, text: newValue.text } : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    );
  };

  return (
    <>
      <h1>What's the plan for today?</h1>
      <Form onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default List;
