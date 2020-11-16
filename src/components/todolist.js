import { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="list-group col-md-7 m-auto">
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
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.Text}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
