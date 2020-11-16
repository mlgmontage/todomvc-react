import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Todo MVC</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
