import React from 'react'

const PollOption = ({ id, name, setOptionValue }) => {
  return (
    <div className='mb-1 flex items-center gap-2'>
      <label className="xl:text-lg">
        <input
          type="radio"
          name="choice"
          value={id}
          className='mr-2 dark:bg-slate-800 dark:border-slate-800 dark:text-slate-900'
          onChange={(e) => setOptionValue(e.target.value)}/>
        {name}
      </label>
    </div>
  )
}

export default PollOption
