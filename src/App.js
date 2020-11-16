import { Component } from "react";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";
import host from "./host";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
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

  delete(ind) {
    console.log(ind);
  }

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

  async complete(index) {
    const todos = [...this.state.todos];
    const todoIndex = todos.findIndex((todo) => todo.TodoId === index);
    todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;

    const response = await fetch(
      `${host}/api/todos/complete/${todos[todoIndex].TodoId}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: Number(todos[todoIndex].isCompleted),
        }),
      }
    );

    if (response.status === 200) {
      this.setState({
        todos,
      });
    }
  }

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
        <TodoList
          delete={this.delete}
          todos={this.state.todos}
          complete={this.complete}
        />
      </div>
    );
  }
}

export default App;
