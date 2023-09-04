import { useState } from 'react';

function Text() {
  const [name, setName] = useState('Toto'); // usf
  const toggleName = (newName, event) => {
    setName(newName === name ? '' : newName); // Asynchrone... Donc name n'est pas à jour à la ligne d'après
    console.log(name); // name vaut toujours Toto
    console.log(event); // Si on veut récupérer l'event
  };

  return (
    <div>
      <br />
      <button onClick={() => toggleName('Fiorella')} className={name === 'Fiorella' ? 'selected' : ''}>Fiorella</button>
      <button onClick={(event) => toggleName('Toto', event)} className={name === 'Toto' ? 'selected' : ''}>Toto</button>
      <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
      <button onClick={() => setName('')} disabled={!name.trim()}>Supprimer</button>
      {name.trim() && <h1>Ton prénom est {name}</h1>}
    </div>
  );
}

export default Text;
