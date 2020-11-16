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
        <TodoForm />
        <TodoList todos={this.state.todos} complete={this.complete} />
      </div>
    );
  }
}

export default App;
