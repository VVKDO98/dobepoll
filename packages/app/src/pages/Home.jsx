import React from 'react'
import Layout from '../Layout'
import Button from '../components/Button'

const Home = () => {
  return (
    <Layout>
      <div className='w-full mt-10'>
        <div className='w-full h-2/5 sm:h-1/3
                        p-5 dark:bg-slate-600 rounded-md flex flex-col items-start justify-center'>
          <h1 className='mb-10
                        text-2xl sm:text-2xl md:text-2xl lg:text-3xl
                        font-bold'>Create your poll quickly</h1>
          <p className='mb-10
                        text-base sm:text-base md:text-base lg:text-lg
          '>Want to ask your friends where to go on Friday night or organise a meeting with colleagues? Create a survey - and get answers in no time.</p>
          <div className='w-full'>
            <Button content={'Create a poll'} link={'/create'} secondary={false}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
