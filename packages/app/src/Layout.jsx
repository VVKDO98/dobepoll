import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen relative dark:bg-slate-800 dark:text-slate-50 '>
      <Navbar/>
        <main className='w-4/5 h-full mx-auto flex items-center'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
