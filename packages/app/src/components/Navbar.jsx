import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'>DobePoll</Link>
        <Link to='/create'>Create a poll</Link>
      </div>
      <div>
        <Link to="/">Register</Link>
        <Link to="/">Login</Link>
      </div>

    </nav>
  )
}

export default Navbar
