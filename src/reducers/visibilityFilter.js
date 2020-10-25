const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log({ state, action });
      return action.filter;
      break;
    default:
      return state;
  }
};

export default visibilityFilter;