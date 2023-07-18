import React, { useState } from 'react';
import Form from './Form.js';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (newValue) => {
    updateTodo(edit.id, newValue);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    // Pass the whole Todo object to the Form component for editing
    const todoToEdit = todos.find((todo) => todo.id === edit.id);
    return <Form edit={todoToEdit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
      </div>
    </div>
  ));
};

export default Todo;
