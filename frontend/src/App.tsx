

import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import AddPostPage from './pages/SubmitPostPage'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/add-post' element={<AddPostPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
