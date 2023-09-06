import { useSelector } from 'react-redux';

function Header(/*{ todos }*/) {
  const todos = useSelector(state => state.todo);

  return (
    <h1>Todo List 1 ({todos.length} todos)</h1>
  );
}

export default Header;
