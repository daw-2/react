import { useState } from 'react';

function Counter({ init = 0, max = Infinity }) {
  const [count, setCount] = useState(init);

  const increment = () => {
    // Rappel, le state est asynchrone
    setCount((c) => c + 1); // 0 + 1
    setCount((c) => c + 1); // 1 + 1
    setCount((c) => c + 1); // 2 + 1
  }

  const decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      {count < max && <button onClick={increment}>+</button>}
      {/* increment === () => increment() */}
    </>
  );
}

export default Counter;
