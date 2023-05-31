import React, { useState } from 'react';

function TodoForm(props) {
  const [task, setTask] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;