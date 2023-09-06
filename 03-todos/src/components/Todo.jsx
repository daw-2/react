function Todo({ todo }) {
  return (
    <div className="grid todo-grid">
      <input type="checkbox" role="switch" checked={todo.done} />
      <span>{todo.name}</span>
      <span role="button" className="secondary">X</span>
    </div>
  );
}

export default Todo;
