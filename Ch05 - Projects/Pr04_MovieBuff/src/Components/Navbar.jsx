import React from 'react'
//importing an image
import Logo from "../assets/movieLogo02.jpg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py-4'>
        <Link to = "/"><img className="w-[50px]" src={Logo} alt='' /></Link>
        <Link to = "/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to = "/watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar