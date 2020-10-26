const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      console.log(action.type);
      return action.filter;
      break;
    default:
      return state;
  }
};

export default visibilityFilter;