import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ content, link, secondary }) => {
  return (
    <button className={secondary ? 'w-1/3 h-10 bg-slate-500 rounded-md font-semibold' : 'w-1/3 h-10 bg-sky-500 rounded-md font-semibold'}>
      <Link to={link}>{content}</Link>
    </button>
  )
}

export default Button
