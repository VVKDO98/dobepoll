import React from 'react'

const CreatePollComp = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
        </div>
        <div>
          <label htmlFor="options">Options</label>
          <input type="text" name="options" />
        </div>
      </form>
    </div>
  )
}

export default CreatePollComp
