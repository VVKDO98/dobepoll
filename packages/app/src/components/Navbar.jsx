import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full mx-auto mb-10 pt-5 flex justify-between items-center '>
      <div className='w-full flex justify-between items-center gap-2 sm:w-auto sm:gap-10'>
        <Link to='/' className='font-semibold'>DobePoll</Link>
        <Link to='/create' className='dark:hover:text-sky-500'>Create a poll</Link>
      </div>
      <div className='hidden sm:flex items-center gap-2 sm:gap-10'>
        <Link to="/" className='dark:hover:text-sky-500'>Register</Link>
        <Link to="/" className='px-5 py-2 dark:bg-sky-500 rounded-md font-semibold hover:dark:bg-white hover:dark:text-slate-800'>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
