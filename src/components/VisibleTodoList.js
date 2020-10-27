import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as actions from '../actions'
import {getIsFetching, getVisibleTodos} from '../reducers'
import TodoList from './TodoList'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const {filter, fetchTodos, requestTodos} = this.props
    fetchTodos(filter)
    requestTodos(filter)
  }

  render() {
    const {isFetching, toggleTodo: toggleTodoFromProp, todos} = this.props

    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    return <TodoList todos={todos} onTodoClick={toggleTodoFromProp} />
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  requestTodos: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

const mapStateToTodoListProps = (state, {match}) => {
  const filter = match.params.filter || 'all'
  return {
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter),
    filter,
  }
}

// eslint-disable-next-line no-class-assign
VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, actions)(VisibleTodoList),
)

export default VisibleTodoList
