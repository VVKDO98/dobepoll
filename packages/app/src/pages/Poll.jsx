import React, { useState } from 'react'
import PollComp from '../components/PollComp'
import Layout from '../Layout'
import Snackbar from '../components/Snackbar'

const Poll = () => {
  const currentUrl = window.location.href
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <div className='w-full mt-24'>
        <h1 className='font-bold text-3xl mb-5'>Poll</h1>
        <PollComp setOpen={setOpen} currentUrl={currentUrl}/>
      </div>
      <Snackbar open={open} setOpen={setOpen}/>
    </Layout>
  )
}

export default Poll
