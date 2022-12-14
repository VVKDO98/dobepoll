import React from 'react'

const PollOption = ({ id, name }) => {
  return (
    <div className='mb-1 flex items-center gap-2'>
      <label className="xl:text-lg">
        <input type="radio" name="choice" value={id} className='mr-2 dark:bg-slate-800 dark:border-slate-800 dark:text-slate-900'/>
        {name}
      </label>
    </div>
  )
}

export default PollOption
