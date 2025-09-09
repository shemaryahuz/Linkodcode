
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'

import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='app'>
      <Header />
      <HomePage />
      <Nav />
      <Footer />
    </div>
  )
}

export default App
