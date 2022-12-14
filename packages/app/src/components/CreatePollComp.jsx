import React from 'react'
import Button from './Button'
import Input from './Input'

const CreatePollComp = () => {
  return (
    <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
      <form action="" className='w-full h-full'>
        <Input name={'Title'} value={'title'}/>
        <Input name={'Description'} value={'description'}/>
        <div className='flex flex-col'>
          <p className='text-lg'>Options</p>
          <button className='py-1 px-3 bg-slate-500 rounded-md font-semibold'>Add</button>
        </div>
        <button type='submit' className='py-1 px-3 bg-sky-500 rounded-md font-semibold'>Create poll</button>
      </form>
    </div>
  )
}

export default CreatePollComp
