import React, { useState, useEffect, useRef } from 'react';

function Form({ edit, onSubmit }) {
  const [todoText, setTodoText] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      text: todoText,
    });

    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <label>
        {edit ? 'Update your item' : 'Add a todo'}
        <input
          type='text'
          placeholder={edit ? 'Update your item' : 'Add a todo'}
          value={todoText}
          onChange={handleChange}
          name='text'
          className={`todo-input ${edit ? 'edit' : ''}`}
          ref={inputRef}
        />
      </label>
      <button type='submit' className={`todo-button ${edit ? 'edit' : ''}`}>
        {edit ? 'Update' : 'Add Todo'}
      </button>
    </form>
  );
}

export default Form;
