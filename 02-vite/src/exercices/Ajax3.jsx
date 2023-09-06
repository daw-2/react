import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../Button';

function Example() {
  const [cats, setCats] = useState([
    { type: 'Blanc', name: 'Bianca' },
    { type: 'Noir', name: 'Mina' },
  ]);
  const [type, setType] = useState('Tout');

  return (
    <div>
      <button onClick={() => setType('Blanc')}>Blanc</button>
      <button onClick={() => setType('Noir')}>Noir</button>
      <button onClick={() => setType('Tout')}>Tout</button>
      <ul>
        {cats.filter((cat) => cat.type == type || type == 'Tout').map((cat, index) => (
          <li key={index}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

// C'est un hook custom (une fonction boostée)
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
      setLoading(false);
    }).catch((error) => setError(true));
  }, [url]); // Quand l'url, on refait la requête...

  return { data, loading, error, setData, count: data.length };
}

const toUpper = (text) => text.toUpperCase();

function Todos() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?_limit=3');
  const { data: todos, loading, count } = useFetch(url);
  const [type, setType] = useState('all'); // all, completed, uncompleted

  return (
    <>
      {loading && <p>{toUpper('Chargement...')}</p>}
      {!loading &&
        <>
          <h2>{count} todos</h2>
          <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
          </ul>
          <Button>All</Button>
          <Button>Completed</Button>
          <Button>Uncompleted</Button>
          <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?_limit=6')}>
            Page suivante
          </button>
        </>
      }
    </>
  );
}

export default function Ajax3() {
  return (
    <div>
      <p>Voici un exemple où on va filtrer un tableau</p>
      <Example />
      <Todos />

      <p>Créer un composant Todos qui va chercher des todos sur https://jsonplaceholder.typicode.com/todos</p>
      <p>Afficher le nombre de todos à faire.</p>
      <p>Ajouter un bouton dans ce composant qui va nous permettre d'afficher les todos complétées ou non (toggle).</p>
      <p>Ajouter un autre bouton permettant d'afficher à nouveau toutes les todos.</p>
    </div>
  );
}