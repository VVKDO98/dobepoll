import React from 'react'
import PollComp from '../components/PollComp'
import Layout from '../Layout'

const Poll = () => {
  return (
    <Layout>
      <div className='w-full pt-24'>
        <h1 className='font-bold text-3xl mb-10'>Poll</h1>
        <PollComp/>
      </div>
    </Layout>
  )
}

export default Poll
