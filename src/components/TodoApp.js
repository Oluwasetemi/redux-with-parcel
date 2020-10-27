import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'

function TodoApp({match}) {
  return (
    <>
      <h1>Todo App 3</h1>
      <AddTodo />
      <VisibleTodoList filter={match.params.filter || 'all'} />
      <Footer />
    </>
  )
}

export default TodoApp
