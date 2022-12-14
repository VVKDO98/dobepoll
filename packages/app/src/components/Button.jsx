import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ type, content, link, secondary, event }) => {
  if (!link) {
    return <button
              type={type}
              className={secondary
                ? 'w-full h-10 text-slate-900 dark:text-slate-50 bg-slate-200 dark:bg-slate-500 rounded-md font-medium ease-in-out duration-300 hover:bg-slate-100'
                : 'w-full h-10 text-slate-50 dark:text-slate-50 bg-sky-500 dark:bg-sky-500 rounded-md font-semibold ease-in-out duration-300 hover:bg-sky-400 '}
              onClick={event || undefined}
            >
              {content}
            </button>
  }

  return (
    <Link to={link}>
      <button
        type={type}
        className={secondary
          ? 'w-full h-10 text-slate-900 dark:text-slate-50 bg-slate-200 dark:bg-slate-500 rounded-md font-medium hover:bg-slate-400 duration-300'
          : 'w-full h-10 text-slate-50 dark:text-slate-50 bg-sky-500 dark:bg-sky-500 rounded-md font-semibold hover:bg-sky-400 duration-300'}
      >
        {content}
      </button>
    </Link>
  )
}

export default Button
