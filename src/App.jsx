import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

    return (
  <div className="App overflow-x-hidden">
      <Dashboard />
      
    </div>
  )
}

export default App
