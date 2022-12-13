import React from 'react'
import Layout from '../Layout'
import Button from '../components/Button'

const Home = () => {
  return (
    <Layout>
        <div className='w-full h-96 p-5 dark:bg-slate-600 rounded-md flex flex-col items-start justify-center'>
          <h1 className='mb-5 text-2xl font-semibold'>Create your poll quickly</h1>
          <p className='mb-5'>Want to ask your friends where to go on Friday night or organise a meeting with colleagues? Create a survey - and get answers in no time.</p>
          <Button content={'Create a poll'} link={'/create'} secondary={false}/>
        </div>
    </Layout>
  )
}

export default Home
