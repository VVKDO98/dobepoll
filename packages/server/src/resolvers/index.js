import { prisma } from '../database.js'
import { Query } from './query.js'
import { Mutation } from './mutation.js'
import { Subscription } from './subscription.js'

const Poll = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  description: (parent) => parent.description,
  options: (parent, args) => {
    return prisma.Options.findMany({
      where: { polls_id: Number(parent.id) },
      include: {
        _count: {
          select: { votes: true }
        }
      }
    })
  }
}

const resolvers = {
  Poll,
  Query,
  Mutation
}

export {
  resolvers
}
