import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { useEffect, useState } from 'react';
import { fetchTodos } from '../store';

function TodoList(/*{ todos }*/) {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    // dispatch(fetchTodos());
  }, []);

  return (
    <div>
      {todos.map(todo =>
        <Todo todo={todo} key={todo.id} editing={editing && editing.id === todo.id} onEditing={(e) => setEditing(e)} />
      )}
    </div>
  );
}

export default TodoList;
