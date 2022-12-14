import React from 'react'
import CreatePollComp from '../components/CreatePollComp'
import Layout from '../Layout'

const CreatePoll = () => {
  return (
        <Layout>
            <div className='w-full pt-24'>
              <h1 className='font-bold text-3xl mb-10'>Create poll</h1>
              <CreatePollComp/>
            </div>
        </Layout>
  )
}

export default CreatePoll
