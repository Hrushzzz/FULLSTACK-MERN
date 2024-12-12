import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//importing all our components
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Watchlist from './Components/Watchlist'
import { Routes, Route } from 'react-router-dom'
import MovieContextWrapper from './MovieContext'

function App() {

  return (

    <MovieContextWrapper>

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/watchlist' element = {<Watchlist></Watchlist>}></Route>
      </Routes>

    </MovieContextWrapper>

  )
}

export default App
