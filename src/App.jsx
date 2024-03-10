import './App.css'
import { Route } from 'wouter'
import { Header } from './components/Header'
import Home from './components/Home'
import About from './pages/About'
import Rules from './pages/Rules'

function App() {
  return (
  <>
    <Route path="/">
      <Header />
      <Home />
    </Route>

    <Route path="/About">
      <Header />
      <About />
    </Route>

    <Route path="/Rules">
      <Header />
      <Rules />
    </Route>
  </>
  )
}

export default App
