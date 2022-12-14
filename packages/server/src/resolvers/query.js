import { prisma } from '../database.js'
const Query = {
  polls: async () => await prisma.Polls.findMany({}),
  poll: async (parent, args) => await prisma.Polls.findUnique({
    where: {
      id: Number(args.id)
    }
  }),
  options: async () => await prisma.Options.findMany({})
}

export {
  Query
}
