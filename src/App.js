import { Component } from "react";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";

class App extends Component {
  state = {
    todos: [
      { text: "Watch YT", isCompleted: false },
      { text: "Complete Todo MVC", isCompleted: true },
      { text: "Play chess", isCompleted: false },
    ],
    text: "",
  };

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
