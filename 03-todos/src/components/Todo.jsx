import { useDispatch } from 'react-redux';
import { remove } from '../store';

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="grid todo-grid">
      <input type="checkbox" role="switch" checked={todo.done} />
      <span>{todo.name}</span>
      <span role="button" className="secondary"
        /*onClick={() => dispatch({ type: 'todo/remove', payload: todo.id })}*/
        onClick={() => dispatch(remove(todo.id))}
      >
        X
      </span>
    </div>
  );
}

export default Todo;
