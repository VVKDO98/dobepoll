import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

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
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />

          <label htmlFor="description">Description</label>
          <Field type="text" name="description" />

          {values.options.map((item, idx) => (
            <div key={`name-${idx}`}>
              <label htmlFor={`name-${idx}`}>Option</label>
              <Field type="text" name={`options[${idx}].name`} />
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              values.options.push({ name: '' })
              setCount(count + 1)
            }}
          >
            Add Name
          </button>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikForm
