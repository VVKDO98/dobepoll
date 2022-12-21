import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import { useQuery, gql, useSubscription } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { formatDistance } from 'date-fns'
import OptionsResult from '../components/OptionResult'
import Snackbar from '../components/Snackbar'

const GET_POLL_RESULT = gql`
query Poll($id: Int) {
  poll(id: $id) {
    id
    name
    description
    created_at
    options {
      id
      name
      _count {
        votes
      }
    }
  }
}
`

const GET_OPTIONS_UPDATE = gql`
subscription VoteSub($pollId: Int) {
  voteSub(pollId: $pollId) {
    created_at
    description
    id
    name
    options {
      _count {
        votes
      }
      name
    }
  }
}
`

const ResultPoll = () => {
  const { id } = useParams()
  const paramsId = parseInt(id)
  const currentUrl = window.location.href
  const [currentPoll, setCurrentPoll] = useState()
  const [open, setOpen] = useState(false)

  const { loading, error, data: currentPollData } = useQuery(GET_POLL_RESULT, {
    variables: { id: paramsId }
  })

  const { data: optionsData, loading: optionsLoading, error: optionsError } = useSubscription(GET_OPTIONS_UPDATE, { variables: { pollId: paramsId } })

  useEffect(() => {
    setCurrentPoll(optionsData)
  }, [optionsData])

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>

  return (
    <Layout>
      <div className='w-full mt-24'>
        <h1 className='font-bold text-3xl mb-5'>Result</h1>
        <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
          <div className='mb-10'>
            <h2 className='mb-1 text-2xl font-semibold'>{currentPollData.poll.name}</h2>
            <p className='mb-1 text-base'>{currentPollData.poll.description}</p>
            <p className='text-xs font-light'>{formatDistance(new Date(parseInt(currentPollData.poll.created_at)), new Date(), { addSuffix: true })}</p>
          </div>
          <div className='mb-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5'>
            <OptionsResult data={currentPollData}/>
          </div>
          <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2'>
            <div className='w-full lg:w-1/2'>
              <Button content={'Back to vote'} link={`/poll/${id}`} secondary={true}/>
            </div>
            <div className='w-full lg:w-1/2'>
              <Button content={'Share results'} event={() => {
                navigator.clipboard.writeText(currentUrl)
                setOpen(true)
              }} secondary={false}/>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} setOpen={setOpen}/>
    </Layout>
  )
}

export default ResultPoll
