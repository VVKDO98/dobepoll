import React from 'react'
import PollComp from '../components/PollComp'
import Layout from '../Layout'

const Poll = () => {
  return (
    <Layout>
      <h1 className='font-bold text-3xl mb-10'>Poll</h1>
      <PollComp/>
    </Layout>
  )
}

export default Poll
