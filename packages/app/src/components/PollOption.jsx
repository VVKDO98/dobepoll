import React from 'react'

const PollOption = ({ id, name }) => {
  return (
    <div className='flex items-center gap-2'>
      <input type="radio" name={id} className='dark:bg-slate-800 dark:border-slate-800 dark:text-slate-900'/>
      <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default PollOption
