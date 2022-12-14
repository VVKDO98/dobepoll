import React from 'react'
import Button from './Button'
import Input from './Input'

const CreatePollComp = () => {
  return (
    <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
      <Input name={'Title'} value={'title'}/>
      <Input name={'Description'} value={'description'}/>
      <div className='mb-5 flex flex-col'>
        <p className='text-lg'>Options</p>
        <Button nolink={true} content={'Add'} event={''} secondary={true}/>
      </div>
      <Button nolink={true} content={'Create poll'} event={''} secondary={false}/>
    </div>
  )
}

export default CreatePollComp
