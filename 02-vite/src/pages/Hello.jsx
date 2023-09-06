import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Hello() {
  const { name } = useParams();
  const [search, setSearch] = useState(name);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(name);
    setSearch(name);
  }, [name]);

  const sayHello = () => {
    alert(search);
    navigate(`/bonjour/${search}`);
  }

  const queryString = () => {
    const result = {};

    searchParams.forEach((value, key) => {
      result[key] = value;
    });

    return result;
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <Link to="/bonjour/toto">Toto</Link>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => sayHello()}>Bonjour</button>
      {JSON.stringify(searchParams)}
      {searchParams.get('upper') ? name.toUpperCase() : ''}
      <input type="checkbox" checked={searchParams.get('upper') == 1}
        onChange={(e) => setSearchParams({ ...queryString(), upper: e.target.checked ? 1 : 0 })}
      />
      <input type="text" value={searchParams.get('price') ?? ''}
        onChange={(e) => setSearchParams({ ...queryString(), price: e.target.value })}
      />
    </>
  );
}

export default Hello;
