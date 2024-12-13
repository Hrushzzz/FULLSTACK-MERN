import { useState } from 'react'
import './App.css'
import CounterRedux from './Components/reduxComponents/CounterRedux';


function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterRedux></CounterRedux>
  )
}

export default App
