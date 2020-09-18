import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
let countNumber = 4;

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "cleanup", completed: true },
      { id: 2, title: "study", completed: false },
      { id: 3, title: "eat", completed: false },
    ],
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: countNumber++,
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markCompleteProp={this.markComplete}
          deleteTodoProp={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
