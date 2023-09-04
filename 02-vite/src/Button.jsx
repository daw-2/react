import { useState } from 'react';

function Button({ color, children }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      style={{ backgroundColor: color }}>
      {children} {enabled && '✅'}
    </button>
  );
}

export default Button;
