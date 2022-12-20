import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import { useQuery, gql, useSubscription } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { formatDistance } from 'date-fns'

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
subscription Subscription($pollId: Int) {
  voteSub(pollId: $pollId) {
    name
    _count {
      votes
    }
  }
}
`

const ResultPoll = () => {
  const { id } = useParams()
  const paramsId = parseInt(id)
  const currentUrl = window.location.href

  const { loading, error, data } = useQuery(GET_POLL_RESULT, {
    variables: { id: paramsId }
  })

  const { data: optionsData, loading: optionsLoading, error: optionsError } = useSubscription(GET_OPTIONS_UPDATE, { variables: { pollId: paramsId } })

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>

  console.log(optionsData)

  return (
    <Layout>
      <div className='w-full pt-24'>
        <h1 className='font-bold text-3xl mb-10'>Result</h1>
        <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
          <div className='mb-10'>
            <h2 className='mb-1 text-xl font-semibold xl:text-2xl'>{data.poll.name}</h2>
            <p className='mb-1 xl:text-lg'>{data.poll.description}</p>
            <p className='text-xs xl:text-sm'>{formatDistance(new Date(parseInt(data.poll.created_at)), new Date(), { addSuffix: true })}</p>
          </div>
          <div className='mb-10'>
            {data.poll.options.map((option) => {
              return <div key={option.id}>
                        <p>{option.name} : {option._count.votes} votes</p>
                      </div>
            })}
          </div>
          <div className='w-full flex items-center justify-center gap-2'>
            <Button content={'Share'} event={() => navigator.clipboard.writeText(currentUrl)} secondary={true}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResultPoll
