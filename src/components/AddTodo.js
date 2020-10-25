import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input = React.useRef(null);
  return (
    <>
      <input type="text" name="todo" id="todo" ref={input} />
      <button
        onClick={() => {
          dispatch(addTodo(input.current.value));
          input.current.value = "";
        }}
      >
        Add Todo
      </button>
    </>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}


export default connect()(AddTodo);