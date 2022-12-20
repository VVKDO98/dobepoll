import React from 'react'
import Button from './Button'
import { VscChromeClose } from 'react-icons/vsc'

const Snackbar = ({ open, setOpen }) => {
  return (
    <>
      {open
        ? (
        <div className="w-1/3 h-20 px-5 bg-slate-400 rounded-md font-medium flex items-center justify-between fixed bottom-10 left-1/3 transition-all duration-300 ease-in-out">
          <span>Link copied</span>
          <button onClick={() => setOpen(false)}><VscChromeClose className='text-white text-2xl'/></button>
        </div>
          )
        : <div className="w-1/3 h-20 px-5 bg-slate-400 rounded-md font-medium flex items-center justify-between fixed -bottom-20 left-1/3 transition-all duration-300 ease-in-out">
          <span>Link copied</span>
          <button onClick={() => setOpen(false)}><VscChromeClose className='text-white text-2xl'/></button>
      </div>}
    </>
  )
}

export default Snackbar
