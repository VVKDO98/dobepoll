import React, { useEffect } from 'react'

const OptionResult = ({ data }) => {
  return (
    <>
      {data.poll.options.map((option) => {
        return (
          <div
            key={option.id}
            className='w-full sm:w-5/12 lg:w-1/5 flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-500 rounded-md py-5 '>
            <p className='text-3xl font-bold'>{option._count.votes}</p>
            <p className='text-sm font-light'>{option.name}</p>
          </div>
        )
      })}
    </>
  )
}

export default OptionResult
