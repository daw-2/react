import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A propos</Link>
          <Link to="/cycle-de-vie">Cycle de vie</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        Copyright &copy;
      </footer>
    </>
  )
}

export default App
