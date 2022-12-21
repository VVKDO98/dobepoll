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
            <div className='mb-5 flex flex-col'>
              <label
                htmlFor="name"
                className='text-base font-light mb-1'
              >Name</label>
              <Field
                type="text"
                name="name"
                placeholder="My birthday"
                className='dark:bg-slate-800 dark:border-slate-800 rounded-md placeholder:text-slate-600'/>
            </div>
            <div className='mb-5 flex flex-col'>
              <label
                htmlFor="description"
                className='text-base font-light mb-1'
              >Description</label>
              <Field
                type="text"
                name="description"
                placeholder='You are invited to my birthday ...'
                className='dark:bg-slate-800 dark:border-slate-800 rounded-md placeholder:text-slate-600' />
            </div>
            <div className='mb-5 flex flex-col'>
              <label
                htmlFor="options"
                className='text-base font-light mb-1'
              >Options</label>
              {values.options.map((item, idx) => (
                <div className='mb-3' key={`name-${idx}`}>
                  <Field
                    type="text"
                    name={`options[${idx}].name`}
                    placeholder='Day'
                    className='w-full dark:bg-slate-800 dark:border-slate-800 rounded-md placeholder:text-slate-600'/>
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
