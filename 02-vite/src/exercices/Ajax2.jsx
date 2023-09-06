import { useEffect, useState } from 'react';
import axios from 'axios';

function Example() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Avec fetch pour les puristes
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    //   .then(response => setUsers(response));

    axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data));
  };

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default function Ajax2() {
  return (
    <div>
      <p>Voici un exemple où on va récupèrer des données sur une API en AJAX</p>
      <Example />

      <p>Dans le composant Example, ajouter un booléen loading dans le state à true par défaut.</p>
      <p>Ce booléen va nous servir à afficher une petite image de chargement s'il est à true au lieu de la liste. Vous pouvez trouver une image <a href="https://samherbert.net/svg-loaders">ici</a>.</p>
      <p>Dans le .then du fetch, en plus de mettre à jour le tableau d'utilisateur, on passera ce booléen à false. Cela veut donc dire que les utilisateurs sont chargés de l'API et on pourra cacher le loader et afficher la liste.</p>
      <p>Ajouter un bouton permettant de vider le tableau et de faire à nouveau appel à l'API pour remplir le tableau. Il faudra donc repasser le booléen à false le temps de faire le chargement puis de le repasser à true.</p>
    </div>
  );
}
