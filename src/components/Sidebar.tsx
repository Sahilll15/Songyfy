import React from 'react'
import { AiFillHome, AiOutlineSearch, AiFillHeart, AiFillPlayCircle } from 'react-icons/ai';
import './Navbar.css'

const Sidebar = () => {
  return (
    <>
    <div className="Navbar">
        <div className="nav-items">
            <div className="nav-item"><span ><AiFillHome /></span><a href="">Home</a></div>
            <div className="nav-item"><span ><AiOutlineSearch /></span><a href="">Search</a></div>
            <div className="nav-item"><span ><AiFillHeart /></span><a href="">Favourites</a></div>
            <div className="nav-item"><span ><AiFillPlayCircle /></span><a href="">Playlists</a></div>
        </div>
    </div>
    </>
  )
}

export default Sidebar