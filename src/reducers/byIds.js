const byId = (state = {}, action) => {
  // switch (action.type) {
  //   case 'FETCH_TODOS_SUCCESS':
  //     // eslint-disable-next-line no-case-declarations
  //     const nextState = {...state}
  //     action.response.forEach((todo) => {
  //       nextState[todo.id] = todo
  //     })
  //     return nextState
  //   case 'ADD_TODO_SUCCESS':
  //     return {
  //       ...state,
  //       [action.response.id]: action.response,
  //     }
  //   default:
  //     return state
  // }
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    }
  }

  return state
}

export default byId

export const getTodo = (state, id) => state[id]
