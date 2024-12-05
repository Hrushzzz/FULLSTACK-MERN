import React from 'react'
//importing an image
import Logo from "../assets/movieLogo01.jpg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to = "/"><img src={Logo} alt='' /></Link>
        <Link to = "/">Movies</Link>
        <Link to = "/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar