import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePoll from './pages/CreatePoll'
import Poll from './pages/Poll'
import ResultPoll from './pages/ResultPoll'
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client'
import './index.css'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

const wsLink = new GraphQLWsLink(createClient({ url: 'ws://localhost:4000/' }))
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/create' element={<CreatePoll/>} />
          <Route path='/poll/:id' element={<Poll/>} />
          <Route path='/poll/:id/result' element={<ResultPoll/>} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>

)
