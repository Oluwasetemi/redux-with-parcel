import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as actions from '../actions'
import {getVisibleTodos} from '../reducers'
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
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }

  render() {
    const {toggleTodo: toggleTodoFromProp, ...rest} = this.props
    return <TodoList {...rest} onTodoClick={toggleTodoFromProp} />
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

const mapStateToTodoListProps = (state, {match}) => {
  const filter = match.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  }
}

// eslint-disable-next-line no-class-assign
VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, actions)(VisibleTodoList),
)

export default VisibleTodoList
