import PropTypes from 'prop-types'
import React from 'react'
import {Provider} from 'react-redux'
import TodoApp from './TodoApp'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <h1>Todo App</h1>
      <TodoApp />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
