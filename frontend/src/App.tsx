
import './App.css'
import Logo from './components/Logo'
import Slogan from './components/Slogan'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='app'>
      <header>
        <Logo />
        <Slogan />
      </header>
      <HomePage />

    </div>
  )
}

export default App
