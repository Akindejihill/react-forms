import React from 'react';

function Todo (props) {
  return (
    <div>
      {props.todo.task}
      <button onClick={() => props.removeTodo(props.index)}>X</button>
    </div>
  );
}

export default Todo;