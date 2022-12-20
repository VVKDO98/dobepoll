import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const POST_POLL = gql`
mutation Mutation($poll: PollInput!) {
  addPollWithOptions(poll: $poll) {
    poll {
      id
      description
      name
      options {
        name
      }
      id
      created_at
    }
  }
}
`

const FormikForm = () => {
  const [count, setCount] = useState(0)
  const [addPollWithOptions, { data, loading, error }] = useMutation(POST_POLL)
  const navigate = useNavigate()

  return (
    <div className='w-full p-5 dark:bg-slate-600 rounded-md'>
      <Formik
        initialValues={{
          name: '',
          description: '',
          options: [{ name: '' }]
        }}
        onSubmit={async (values, { resetForm }) => {
          const resp = await addPollWithOptions({ variables: { poll: values } })
          console.log(resp)
          resetForm()
          navigate(`/poll/${resp.data.addPollWithOptions.poll.id}`)
        }}
      >
        {({ values }) => (
          <Form className='w-full'>
            <div className='mb-3 flex flex-col'>
              <label htmlFor="name">Name</label>
              <Field className='dark:bg-slate-800 dark:border-slate-800 rounded-md' type="text" name="name" />
            </div>
            <div className='mb-3 flex flex-col'>
              <label htmlFor="description">Description</label>
              <Field className='dark:bg-slate-800 dark:border-slate-800 rounded-md' type="text" name="description" />
            </div>
            <div>
              <label htmlFor="options">Options</label>
              {values.options.map((item, idx) => (
                <div className='mb-3' key={`name-${idx}`}>
                  <Field className='w-full dark:bg-slate-800 dark:border-slate-800 rounded-md' type="text" name={`options[${idx}].name`} />
                </div>
              ))}
            </div>
            <div className='flex flex-col lg:flex-row gap-3'>
              <div className='w-full lg:w-1/2'>
                <Button type={'button'} content={'Add'} secondary={true} event={() => {
                  values.options.push({ name: '' })
                  setCount(count + 1)
                }}/>
              </div>
              <div className='w-full lg:w-1/2'>
                <Button type={'submit'} content={'Create poll'} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikForm
