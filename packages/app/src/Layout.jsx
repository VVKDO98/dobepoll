import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen dark:bg-slate-800 dark:text-slate-50 '>
      <div className='w-4/5 mx-auto'>
        <Navbar/>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
