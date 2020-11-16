import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="list-group col-md-7 m-auto">
          {this.props.todos.map((todo) => (
            <div className="list-group-item" key={todo.TodoId}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={() => this.props.complete(todo.TodoId)}
                  checked={todo.isCompleted}
                  type="checkbox"
                  id={todo.TodoId}
                />
                <label
                  htmlFor={todo.TodoId}
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.Text}
                </label>
                <span
                  className="float-right"
                  onClick={() => this.props.delete(todo.TodoId)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa fa-trash-o"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
