import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers/index.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(
  server, {
    context: async ({ req }) => ({ ip: req.socket.remoteAddress }),
    listen: { port: 4000 }
  }
)
console.log(url)
