import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Details from './components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Background />
      <Details />
    </div>
  )
}

export default App
