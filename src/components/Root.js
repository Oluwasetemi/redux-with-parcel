import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import TodoApp from './TodoApp'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={TodoApp} />
      </BrowserRouter>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
