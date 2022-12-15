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
  }
}

export {
  Query
}
