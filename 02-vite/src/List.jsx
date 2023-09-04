import { useState } from 'react';

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ]);
  const [newName, setNewName] = useState('');

  const addUser = () => {
    const newUser = { id: Math.random(), name: newName, avatar: 'https://i.pravatar.cc/150?u='+newName };
    // users.push(newUser); // Attention, le tableau est "immutable". On passe un nouveau tableau au state.
    setUsers([ ...users, newUser ]);
    setNewName(''); // Vide le champ
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id)); // filter renvoie une copie du tableau
  }

  return (
    <>
      {/* Un petit commentaire en JSX */}
      <h2>Liste utilisateurs ({users.length})</h2>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <h2>{user.name}</h2>
            <img src={user.avatar} alt={`Photo de ${user.name}`}
              style={{ borderRadius: '50%' }} width={100}
            />
            <button onClick={() => deleteUser(user.id)}>❌</button>
          </li>
        )}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => addUser()} disabled={!newName.trim()}>Ajouter</button>
      <br /><br /><br /><br />
    </>
  );
}

export default List;
