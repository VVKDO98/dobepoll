import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePoll from './pages/CreatePoll'
import Poll from './pages/Poll'
import ResultPoll from './pages/ResultPoll'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({ uri: 'https://localhost:4000', cache: new InMemoryCache() })

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/create' element={<CreatePoll/>} />
        <Route path='/poll/:id' element={<Poll/>} />
        <Route path='/poll/:id/result' element={<ResultPoll/>} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
