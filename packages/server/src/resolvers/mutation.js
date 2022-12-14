import { prisma } from '../database.js'

const Mutation = {
  addPoll: async (_, { name, description }) => {
    const poll = await prisma.Polls.create({
      data: {
        name,
        description
      }
    })
    return poll
  }

}

export {
  Mutation
}
