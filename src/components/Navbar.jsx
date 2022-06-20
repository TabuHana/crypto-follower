import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>

      <Link to='/'>
        <h1 className='text-2xl'>CryptoFollower</h1>
      </Link>

      <div className='hidden md:block'>
        <ThemeToggle />
      </div>

      <div className='hidden md:block'>
        <Link to='/userlogin' className='p-4 hover:text-accent'>Login</Link>
        <Link to='/usersignup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
      </div>

      {/* Menu Icons */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>

        <ul className='w-full p-4'>

          <li className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>

          <li className='border-b py-6'>
            <Link to='/'>Account</Link>
          </li>

          <li className=' py-6'>
            <ThemeToggle />
          </li>
        </ul>

        <div className='flex flex-col w-full p-4'>
          <Link to='/userlogin'>
            <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Login</button>
          </Link>

          <Link to='/usersignup'>
            <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar