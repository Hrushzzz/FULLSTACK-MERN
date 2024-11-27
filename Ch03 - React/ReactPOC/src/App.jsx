import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/myComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My first REACT project..!</h1>
      <p>Hrishi - come FLY with me</p>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
