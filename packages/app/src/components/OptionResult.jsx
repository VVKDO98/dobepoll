import React, { useEffect } from 'react'

const OptionResult = ({ data }) => {
  return (
    <>
      {data.poll.options.map((option) => {
        return <div key={option.id}>
                <p>{option.name} : {option._count.votes} votes</p>
              </div>
      })}
    </>
  )
}

export default OptionResult
