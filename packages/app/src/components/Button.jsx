import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ nolink, content, link, secondary, event }) => {
  if (nolink) {
    return <button
              className={secondary ? 'w-1/3 h-10 bg-slate-500 rounded-md font-semibold' : 'w-1/3 h-10 bg-sky-500 rounded-md font-semibold'}
              onClick={() => console.log('Herlo')}
            >
              {content}
            </button>
  }

  return (
    <button className={secondary ? 'w-1/3 h-10 bg-slate-500 rounded-md font-semibold' : 'w-1/3 h-10 bg-sky-500 rounded-md font-semibold'}>
      <Link to={link}>{content}</Link>
    </button>
  )
}

export default Button
