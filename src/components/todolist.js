import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="list-group col-md-6 m-auto">
        {this.props.todos.map((todo, ind) => (
          <div className="list-group-item" key={ind}>
            <div className="form-check">
              <input
                className="form-check-input"
                onChange={() => this.props.complete(ind)}
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
