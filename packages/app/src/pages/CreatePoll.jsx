import React from 'react'
import CreatePollComp from '../components/CreatePollComp'
import Layout from '../Layout'

const CreatePoll = () => {
  return (
        <Layout>
            <div className='w-full mt-24'>
              <h1 className='font-bold text-3xl mb-5'>Create poll</h1>
              <CreatePollComp/>
            </div>
        </Layout>
  )
}

export default CreatePoll
