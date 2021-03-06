import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import todoApp from './reducers'

// const thunk = (store) => (next) => (
//   action, // eslint-disable-line no-confusing-arrow
// ) => (typeof action === 'function' ? action(store.dispatch) : next(action))

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger)
  }

  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore
