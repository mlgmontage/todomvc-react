import { Component } from "react";

class TodoForm extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div>
        <div className="row">
          <form
            onSubmit={(e) => this.props.addTodo(e)}
            className="col-md-8 m-auto my-3"
          >
            <div className="mb-3">
              <label htmlFor="todoInput" className="form-label">
                What to do?
              </label>
              <input
                type="text"
                className="form-control"
                id="todoInput"
                name="text"
                value={this.props.value}
                onChange={this.props.handleChange}
              />
              <small className="form-text text-muted">
                Write something you need to do
              </small>
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
      </div>
    );
  }
}

export default TodoForm;
