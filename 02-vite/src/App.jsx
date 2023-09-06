import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">A propos</NavLink>
          <NavLink to="/cycle-de-vie">Cycle de vie</NavLink>
          <NavLink to="/bonjour/fiorella">Hello Fiorella</NavLink>
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
