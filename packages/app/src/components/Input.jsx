import React from 'react'

const Input = ({ name, value, setState }) => {
  return (
    <div className='mb-5 flex flex-col'>
      <input type="text" name={value} className='dark:bg-slate-800 border-none rounded-md' onChange={setState}/>
    </div>
  )
}

export default Input
