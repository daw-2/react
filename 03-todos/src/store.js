import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// La partie concernant les todos
const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true },
  ],

  // Les actions sur ces données
  reducers: {
    add: (state, action) => {
      // { payload: { name: 'A faire' } }
      state.push(action.payload);
    },
    remove: (state, action) => {
      // { payload: 20 }
      return state.filter(t => t.id !== action.payload);
    },
    toggle: (state, action) => {
      // { payload: 20 }
      const todo = state.find(t => t.id === action.payload);
      todo.done = !todo.done;
    },
    edit: (state, action, bb) => {
      // { payload: 20 }
      const { id, name } = action.payload;
      const todo = state.find(t => t.id === id);
      todo.name = name;
    },
    init: (state, action) => {
      return action.payload.map(todo => ({
        ...todo, name: todo.title, done: todo.completed
      }));
    }
  },
});

export const { add, remove, toggle, edit, init } = todoSlice.actions;

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
  dispatch(init(response.data));
}

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
