import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./pages/About";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => this.setState({ todos: res.data }))
      .catch((e) => {});
  }
  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  };
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        id: uuidv4(),
        completed: false,
      })
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, { ...res.data, id: uuidv4() }],
        });
      })
      .catch((e) => {});
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
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markCompleteProp={this.markComplete}
                  deleteTodoProp={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
