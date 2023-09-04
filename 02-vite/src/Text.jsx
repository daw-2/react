import { useState } from 'react';

function Text() {
  const [name, setName] = useState('Toto'); // usf
  const toggleName = (newName) => {
    setName(newName === name ? '' : newName); // Asynchrone... Donc name n'est pas à jour à la ligne d'après
    console.log(name); // name vaut toujours Toto
  };

  return (
    <>
      <button onClick={() => toggleName('Fiorella')}>Fiorella</button>
      <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
      <button onClick={() => setName('')} disabled={!name.trim()}>Supprimer</button>
      {name.trim() && <h1>Ton prénom est {name}</h1>}
    </>
  );
}

export default Text;
