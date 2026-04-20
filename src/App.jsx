import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello from Azure DevOps 🚀</h1>
      <p>My first CI/CD React App</p>
      <p>Version 1.4</p>
    </>
  )
}

export default App
