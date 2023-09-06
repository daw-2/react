import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
