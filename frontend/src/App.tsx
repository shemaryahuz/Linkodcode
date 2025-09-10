

import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import SubmitPostPage from './pages/SubmitPostPage'
import SinglePostPage from './pages/SinglePostPage'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/:id' element={<SinglePostPage />}/>
          <Route path='/add-post' element={<SubmitPostPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
