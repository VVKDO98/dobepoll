import { prisma } from '../database.js'
const Query = {
  polls: async () => await prisma.Polls.findMany({}),
  poll: async (parent, args) => await prisma.Polls.findUnique({
    where: {
      id: Number(args.id)
    }
  }),
  options: async () => {
    const options = await prisma.Options.findMany({
      include: {
        _count: {
          select: { votes: true }
        }
      }
    })
    return options
  },
  getVotes: async (_, { vote }) => {
    const votes = await prisma.options.findMany({
      where: {
        polls_id: vote.polls_id
      },
      include: {
        _count: {
          select: { votes: true }
        }
      }
    })
    return votes
  }
}
export {
  Query
}
