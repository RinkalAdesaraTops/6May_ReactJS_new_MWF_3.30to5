import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
        <li>
            {/* <a href="/home">Home</a> */}
            <Link to="/home">Home</Link>
        </li> 
        <li><a href="#">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  )
}

export default Menu
