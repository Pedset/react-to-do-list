import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "green",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markCompleteProp2.bind(this, id)}
        ></input>

        {title}
        <button
          onClick={this.props.deleteTodoProp2.bind(this, id)}
          style={btnStyle}
        >
          x
        </button>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};
const btnStyle = { float: "right" };
export default Todo;

//
