import { Component } from "react";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";
import host from "./host";

class App extends Component {
  state = {
    todos: [],
    text: "",
  };

  async componentDidMount() {
    const response = await fetch(`${host}/api/todos`);
    const data = await response.json();
    this.setState({
      todos: data,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        text: state.text,
        isCompleted: false,
      }),
      text: "",
    }));
  };

  complete = (index) => {
    const todos = [...this.state.todos];
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-center">Todo MVC</h1>
        </header>
        <TodoForm
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          value={this.state.text}
        />
        <TodoList todos={this.state.todos} complete={this.complete} />
      </div>
    );
  }
}

export default App;
