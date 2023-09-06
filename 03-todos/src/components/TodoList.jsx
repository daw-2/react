import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { useEffect } from 'react';
import { fetchTodos } from '../store';

function TodoList(/*{ todos }*/) {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      {todos.map(todo =>
        <Todo todo={todo} key={todo.id} />
      )}
    </div>
  );
}

export default TodoList;
