import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Lifecycle from './pages/Lifecycle.jsx'
import Hello from './pages/Hello.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/cycle-de-vie" element={<Lifecycle />} />
        <Route path="/bonjour/:name?" element={<Hello />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
