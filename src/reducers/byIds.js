const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      // eslint-disable-next-line no-case-declarations
      const nextState = {...state}
      action.response.forEach((todo) => {
        nextState[todo.id] = todo
      })
      return nextState
    default:
      return state
  }
}

export default byId

export const getTodo = (state, id) => state[id]
