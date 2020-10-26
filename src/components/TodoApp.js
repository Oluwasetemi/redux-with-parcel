import React from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

function TodoApp() {
  return (
    <>
      <h1>Todo App 2</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
}

export default TodoApp;