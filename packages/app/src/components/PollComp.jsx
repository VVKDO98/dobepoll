import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Button from './Button'

const GET_POLL_BY_ID = gql`
query GetPollByID($id: Int) {
  poll(id: $id) {
    description
    id
    name
  }
}
`

const PollComp = () => {
  const { id } = useParams()
  const paramsId = parseInt(id)
  const { loading, error, data } = useQuery(GET_POLL_BY_ID, {
    variables: { id: paramsId }
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>

  return (
    <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
      <div className='mb-4'>
        <h2 className='mb-1 text-xl font-semibold'>{data.poll.name}</h2>
        <p className='mb-1'>{data.poll.description}</p>
        <p className='text-xs'>5 mins ago</p>
      </div>
      <div className='mb-4'>
        <h3 className='mb-1 text-base font-semibold'>Options</h3>
        {/* Map options */}
        <div className='flex items-center gap-2'>
          <input type="radio" name="" className='dark:bg-slate-800 dark:border-slate-800 dark:text-slate-900'/>
          <label htmlFor="">aaaa</label>
        </div>
        <div className='flex items-center gap-2'>
          <input type="radio" name="" className='dark:bg-slate-800 dark:border-slate-800 dark:text-slate-900'/>
          <label htmlFor="">aaaa</label>
        </div>
      </div>
      <div className='w-full flex items-center justify-between gap-2'>
        <Button content={'Vote'} link={'/'}/>
        <Button content={'Result'} link={`/poll/${id}/result`} secondary={true}/>
        <Button content={'Share'} link={'/'} secondary={true}/>
      </div>
    </div>
  )
}

export default PollComp
