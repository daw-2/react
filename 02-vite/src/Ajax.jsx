import { useEffect, useState } from 'react';
import axios from 'axios';

function Ajax() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Promesse "normale"
  useEffect(() => {
    axios.get('https://api.vueflix.boxydev.com/movies').then(response => {
      // console.log(response.data);
      setTimeout(() => {
        setMovies(response.data);
        setLoading(false);
      }, 750);
    }).catch((error) => {
      setError(true);
      setLoading(false);
    });

    // console.log('AVANT LA REPONSE');
  }, [loading]);

  // Async / await
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://api.vueflix.boxydev.com/movies');
        setTimeout(() => {
          setMovies(response.data);
          setLoading(false);
        }, 750);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <>
      <h2>Films d'une API</h2>
      <button onClick={() => setLoading(true)}>Refresh</button>
      {error && <div>L'API est indisponible</div>}
      {loading && <div>Chargement...</div>}
      {!loading && <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie =>
          <div key={movie.id} style={{ width: '25%' }}>
            <h4>{movie.title}</h4>
            <img src={movie.poster_path} width={150} />
          </div>
        )}
      </div>}
    </>
  );
}

export default Ajax;
