import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
const app = Fastify({ logger: true })
const prisma = new PrismaClient()

const typeDefs = `#graphQL
  # Comment
  type Poll {
    id : Int
    name : String
    description : String
  #  options : Array
  #  votes : Array
  }

  type Query {
    polls: [Poll]
  }
`
const resolvers = {
  Query: {
    polls: async () => await prisma.Polls.findMany({})
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log('Server ready at:' + url)

// app.get('/', async (req, rep) => {
//   return { hello: 'world' }
// })

// const start = () => {
//   try {
//     app.listen({ port: 3000 }, console.log('server started'))
//   } catch (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
// }

// start()
