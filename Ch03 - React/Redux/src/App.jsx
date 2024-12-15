import { useState } from 'react'
import './App.css'
import CounterRedux from './Components/reduxComponents/CounterRedux';
import TodoRedux from './Components/reduxComponents/TodoRedux';
import UserRedux from './Components/reduxComponents/UserRedux';


function App() {
  
  return (

    <>
      {/* <CounterRedux></CounterRedux>
      <TodoRedux></TodoRedux> */}
      <UserRedux></UserRedux>
    </>
    
  )
}

export default App
