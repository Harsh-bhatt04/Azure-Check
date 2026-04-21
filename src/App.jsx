import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase = () =>{
    setCount((prev) => prev + 1)
  }

  const decrease = () => {
    console.log(count)
  if (count === 0) return;  
  setCount((prev) => prev - 1);
};

  return (
    <>
      <h1>Hello from Azure DevOps 🚀</h1>
      <p>My first CI/CD React App</p>
      <h2>Count : {count}</h2>
      <div><button style={{color: 'white', fontWeight: 3, border: 2, backgroundColor: 'orange', borderRadius: 5, paddingLeft:20, paddingRight:20, paddingTop: 10, paddingBottom: 10, margin: 10}} onClick={increase}>+1</button>
      <button style={{color: 'white', fontWeight: 3, border: 2, backgroundColor: 'green', borderRadius: 5, paddingLeft:20, paddingRight:20, paddingTop: 10, paddingBottom: 10}} onClick={decrease}>-1</button></div>
      <p>Version 1.4</p>
    </>
  )
}

export default App
