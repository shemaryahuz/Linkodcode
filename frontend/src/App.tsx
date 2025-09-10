

import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import SubmitPostPage from './pages/SubmitPostPage'
import SinglePostPage from './pages/SinglePostPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/home/:id' element={<SinglePostPage />}/>
          <Route path='/add-post' element={<SubmitPostPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
