import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div
        className='
        w-screen h-screen relative
        text-slate-900 dark:text-slate-50
        bg-white dark:bg-slate-800'>
        <main className='w-4/5 h-full mx-auto lg:w-3/4 2xl:w-2/3'>
        <Navbar/>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
