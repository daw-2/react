import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
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
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const { data: todos, loading, count } = useFetch(url);
  const [type, setType] = useState('all'); // all, completed, uncompleted
  const [name, setName] = useState('toto');

  // useMemo met en cache un "calcul" et refais ce calcul
  // Si le tableau de dépendances change
  const filteredTodos = useMemo(() => {
    console.log('log');
    return todos.filter((t) => {
      return type === 'all' || type === 'completed' && t.completed
        || type === 'uncompleted' && !t.completed;
    });
  }, [todos, type]);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {loading && <p>{toUpper('Chargement...')}</p>}
      {!loading &&
        <>
          <h2>{filteredTodos.length} todos</h2>
          <ul>
            {filteredTodos.map(todo =>
              <li key={todo.id}>
                {todo.title} {todo.completed && '✅'}
              </li>
            )}
          </ul>
          <Button onClick={(name) => setType('all')} className="btn">All</Button>
          <Button onClick={(name) => setType('completed')}>Completed</Button>
          <Button onClick={(name) => setType('uncompleted')}>Uncompleted</Button>
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