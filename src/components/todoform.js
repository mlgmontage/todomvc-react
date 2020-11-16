import { Component } from "react";

class TodoForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="col-md-8 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              What to do
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Write something you need to do
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
