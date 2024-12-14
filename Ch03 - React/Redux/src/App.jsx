import { useState } from 'react'
import './App.css'
import CounterRedux from './Components/reduxComponents/CounterRedux';
import TodoRedux from './Components/reduxComponents/TodoRedux';


function App() {
  
  return (

    <>
      <CounterRedux></CounterRedux>
      <TodoRedux></TodoRedux>
    </>
    
  )
}

export default App
