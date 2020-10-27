import React from 'react'
import ReactDOM from 'react-dom'
import {fetchTodos} from './api'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore()

fetchTodos('completed').then((todos) => console.log(todos))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
