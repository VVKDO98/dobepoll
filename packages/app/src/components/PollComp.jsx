import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const GET_POLL_BY_ID = gql`
query Poll($id: ID!) {
  poll(id: $id) {
    description
    id
    name
  }
}
`

const PollComp = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_POLL_BY_ID, {
    variables: { id }
  })

  console.log(data)

  return (
    <div>
      <h1>Test</h1>
      <p>Lorem ipsum</p>
      <p>5 mins ago</p>
      <div></div>
    </div>
  )
}

export default PollComp
