import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='w-full pt-10'>
      <div className='w-full flex justify-between items-center gap-2 sm:w-auto sm:gap-10'>
        <Link
          to='/'
          className='font-bold text-xl text-slate-900 dark:text-slate-50'
          >DobePoll</Link>
        <div className='w-2/5 sm:w-1/4 lg:w-1/6'>
          <Link to='/create'>
            <Button content={'Create a poll'} secondary={true}/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
