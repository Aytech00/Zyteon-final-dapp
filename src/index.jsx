import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './pages/App'
import Collection from './pages/Collection'
import CreatePage from './pages/CreatePage';
import Profile from './pages/Profile'
import Art from './pages/Art'
ReactDOM.render(

<BrowserRouter>
  <Routes>
  <Route path='/' element={<App />} />
  <Route path='collection' element={<Collection />} />
  <Route path='createPage' element={<CreatePage/>} /> 
  <Route path='profile' element={<Profile />} />
  <Route path='art' element={<Art/>} />

  </Routes>
</BrowserRouter>,
  document.getElementById('root')
)


