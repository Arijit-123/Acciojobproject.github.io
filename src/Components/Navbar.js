import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      
        <nav>
          <ul>
          <li id='marker56'>
           AccioJob
            </li>
            <li>
            <Link to="/home" id='nootan'>Home</Link> 
            </li>
            <li>
            <Link to="/shop" id='nootan'>Shop</Link>
            </li>
            <li>
            <Link to="/about" id='nootan'>About</Link>
            </li>
            <li>
            <Link to="/blog" id='nootan'>Blog</Link>
            </li>
            <li>
            <Link to="/contact" id='nootan'>Contact</Link>
            </li>
            <li>
            <img src='/images/person.jpg'></img>
            </li>
            <li id='nu'>
            Login/Signup
            </li>
            <li>
            <img src='/images/search.jpg'></img>
            </li>
            <li>
            <img src='/images/cart.jpg'></img>
            <img src='/images/1.jpg'></img>
            </li>
            
            <li>
            <img src='/images/Vector.png'></img>
            <img src='/images/1.jpg'></img>
            </li>
            
          </ul>
        </nav>
      
    </>
  )
}
