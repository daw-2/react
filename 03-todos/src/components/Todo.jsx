import { useDispatch } from 'react-redux';
import { remove, toggle, edit } from '../store';

function Todo({ todo, editing, onEditing }) {
  const dispatch = useDispatch();

  return (
    <div className="grid todo-grid">
      <input type="checkbox" role="switch" checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
      {editing &&
        <input type="text" value={todo.name} onChange={(e) => dispatch(edit({id: todo.id, name: e.target.value}))} onBlur={() => onEditing(null)} /> ||
        <span onDoubleClick={() => onEditing(todo)}>{todo.name} ({todo.id})</span>
      }
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
