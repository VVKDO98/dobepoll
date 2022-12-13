import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ content, link, secondary }) => {
  return (
    <button className={secondary ? 'py-1 px-3 bg-slate-500 rounded-md font-semibold' : 'py-1 px-3 bg-sky-500 rounded-md font-semibold'}>
      <Link to={link}>{content}</Link>
    </button>
  )
}

export default Button
