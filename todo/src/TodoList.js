import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  //add todo item to 'todos' state
  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };

  //splice out the todo item identified by index
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;