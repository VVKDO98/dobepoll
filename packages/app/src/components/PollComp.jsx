import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

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
    <div>
      <h1>{data.poll.name}</h1>
      <p>{data.poll.description}</p>
      <p>5 mins ago</p>
      <div></div>
    </div>
  )
}

export default PollComp
