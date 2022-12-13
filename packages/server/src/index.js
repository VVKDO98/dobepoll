import { PrismaClient } from '@prisma/client'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
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
    polls: [Poll],
    poll(id: Int): Poll
  }

  type Mutation {
    addPoll(name: String, description: String): Poll
  }
`
const resolvers = {
  Query: {
    polls: async () => await prisma.Polls.findMany({}),
    poll: async (_, { id }) => {
      console.log(id)
      return await prisma.Polls.findUnique({
        where: {
          id
        }
      })
    }
  },
  Mutation: {
    addPoll: async (_, { name, description }) => {
      console.log(name + ' ' + description)
      const poll = await prisma.Polls.create({
        data: {
          name,
          description
        }
      })
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})
console.log(url)
