import React from 'react'

const Input = ({ name, value }) => {
  return (
    <div className='mb-5 flex flex-col'>
      <label htmlFor={value} className='text-lg'>{name}</label>
      <input type="text" name={value} className='dark:bg-slate-800 border-none rounded-md'/>
    </div>
  )
}

export default Input
