import { Component } from "react";

class TodoForm extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.props.addTodo(e)}
          className="col-md-8 m-auto"
        >
          <div className="mb-3">
            <label htmlFor="todoInput" className="form-label">
              What to do
            </label>
            <input
              type="text"
              className="form-control"
              id="todoInput"
              name="text"
              value={this.props.value}
              onChange={this.props.handleChange}
            />
            <div id="emailHelp" className="form-text">
              Write something you need to do
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => this.props.addTodo(e)}
            className="btn btn-primary"
          >
            +Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
