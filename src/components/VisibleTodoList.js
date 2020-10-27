import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleTodo} from '../actions'
import {fetchTodos} from '../api'
import {getVisibleTodos} from '../reducers'
import TodoList from './TodoList'

class VisibleTodoList extends Component {
  componentDidMount() {
    console.log(this.props)
    fetchTodos(this.props.filter).then(
      (todos) => console.log(this.props.filter, todos), // eslint-disable-line no-console
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(
        (todos) => console.log(this.props.filter, todos), // eslint-disable-line no-console
      )
    }
  }

  render() {
    return <TodoList {...this.props} />
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  receiveTodos: PropTypes.func.isRequired,
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
  connect(mapStateToTodoListProps, {onTodoClick: toggleTodo})(VisibleTodoList),
)

export default VisibleTodoList
