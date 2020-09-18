import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ title: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name=""
          style={{ flex: 1 }}
          placeholder="Add Things to do"
          value={this.state.title}
          onChange={this.onChange}
        ></input>

        <input type="submit" name="submit"></input>
      </form>
    );
  }
}
