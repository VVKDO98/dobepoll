import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation, useQuery, gql } from '@apollo/client'
import Button from './Button'
import PollOption from './PollOption'
import { formatDistance } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

const GET_POLL_BY_ID = gql`
query GetPollByID($id: Int) {
  poll(id: $id) {
    description
    id
    name
    created_at
    options {
      id
      name
    }
  }
}
`

const POST_VOTE = gql`
mutation Mutation($vote: VoteInput!) {
  vote(vote: $vote)
}
`

const PollComp = ({ setOpen, currentUrl }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const paramsId = parseInt(id)
  const { loading, error, data } = useQuery(GET_POLL_BY_ID, {
    variables: { id: paramsId }
  })
  const [vote, { loading: loadingVote, error: errorVote, data: dataVote }] = useMutation(POST_VOTE)

  const [optionValue, setOptionValue] = useState(0)
  const [storedValue, setStoredValue] = useState('')

  useEffect(() => {
    const storedIdentifier = localStorage.getItem('identifier')
    if (storedIdentifier) {
      setStoredValue(storedIdentifier)
      console.log(storedValue)
    }
    if (!storedIdentifier) {
      localStorage.setItem('identifier', uuidv4())
      setStoredValue(localStorage.getItem('identifier'))
      console.log(storedValue)
    }
  }, [])

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>

  const handleVote = async () => {
    if (optionValue === 0) return
    const val = optionValue
    setOptionValue(0)
    const resp = await vote({
      variables: {
        vote: {
          identifier: storedValue,
          options_id: parseInt(val),
          polls_id: parseInt(id)
        }
      }
    })
    navigate(`/poll/${paramsId}/result`)
    return resp
  }

  return (
    <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
      <div className='mb-10'>
        <h2 className='mb-1 text-2xl font-semibold'>{data.poll.name}</h2>
        <p className='mb-1 text-base'>{data.poll.description}</p>
        <p className='text-xs font-light'>{formatDistance(new Date(parseInt(data.poll.created_at)), new Date(), { addSuffix: true })}</p>
      </div>
      <div className='mb-10'>
        <h3 className='mb-1 text-lg font-semibold'>Options</h3>
        {data.poll.options.map((option) => <PollOption key={option.id} id={option.id} name={option.name} setOptionValue={setOptionValue}/>)}
      </div>
      <div className='w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-2'>
        <div className='w-full lg:w-1/3'>
          <Button content={'Vote'} event={handleVote}/>
        </div>
        <div className='w-full lg:w-1/3'>
          <Button content={'See results'} link={`/poll/${id}/result`} secondary={true}/>
        </div>
        <div className='w-full lg:w-1/3'>
          <Button content={'Share the poll'} secondary={true} event={() => {
            navigator.clipboard.writeText(currentUrl)
            setOpen(true)
          }}/>
        </div>
      </div>
    </div>
  )
}

export default PollComp
