import { Component } from "react";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";
import host from "./host";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
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

  async addTodo(e) {
    e.preventDefault();
    const body = {
      Text: this.state.text,
      isCompleted: Number(false),
    };

    const response = await fetch(`${host}/api/todos/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200) {
      const todo = await response.json();
      console.log(todo);

      this.setState((state) => ({
        todos: [todo, ...this.state.todos],
        text: "",
      }));
    }
  }

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
