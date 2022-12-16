import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { createServer } from 'http'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { WebSocketServer } from 'ws'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { useServer } from 'graphql-ws/lib/use/ws'
import cors from 'cors'

import { typeDefs } from './schema.js'
import { resolvers } from './resolvers/index.js'
import bodyParser from 'body-parser'

async function startApolloServer () {
  // eslint-disable-next-line new-cap
  const app = new express()
  const httpServer = createServer(app)
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/'
  })

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })

  const serverCleanup = useServer({ schema }, wsServer)
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart () {
          return {
            async drainServer () {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ]
  })

  await server.start()
  const { json } = bodyParser
  app.use(cors(), json(), expressMiddleware(server))

  app.use((req, res) => {
    res.status(200)
    res.send('hello')
    res.end()
  })

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))
  console.log('http://localhost:4000')
  return { server, app }
}

export { startApolloServer }
