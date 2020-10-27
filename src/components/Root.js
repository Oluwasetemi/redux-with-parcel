import PropTypes from 'prop-types'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoApp from './TodoApp'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={TodoApp} />
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
