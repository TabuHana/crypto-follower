import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h1>CryptoFollower</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to='/userlogin'>Sign In</Link>
        <Link to='/usersignup'>Sign Up</Link>
      </div>

      {/* Menu Icons */}
      <div>
        <AiOutlineMenu />
      </div>

      {/* Mobile Menu */}
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      <div>
        <Link to='/userlogin'>
          <button>Sign In</button>
        </Link>
        <Link to='/usersignup'>
          <button>Sign Up</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar