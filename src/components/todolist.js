import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
  }

  complete(index) {
    const todos = [...this.state.todos];
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({
      todos,
    });
  }

  state = {
    todos: [
      { text: "Watch YT", isCompleted: false },
      { text: "Complete Todo MVC", isCompleted: true },
      { text: "Play chess", isCompleted: false },
    ],
  };

  render() {
    return (
      <div className="list-group col-md-6 m-auto">
        {this.state.todos.map((todo, ind) => (
          <div className="list-group-item" key={ind}>
            <div className="form-check">
              <input
                className="form-check-input"
                onChange={() => this.complete(ind)}
                checked={todo.isCompleted}
                type="checkbox"
                id={ind}
              />
              <label
                htmlFor={ind}
                className={
                  todo.isCompleted
                    ? "text-decoration-line-through form-check-label"
                    : "form-check-label"
                }
              >
                {todo.text}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
