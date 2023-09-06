import { useState } from 'react';

function Button({ color, children, onClick, className }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      className={className}
      onClick={() => {
        setEnabled(!enabled);
        onClick('Fiorella');
      }}
      style={{ backgroundColor: color }}>
      {children} {enabled && '✅'}
    </button>
  );
}

export default Button;
