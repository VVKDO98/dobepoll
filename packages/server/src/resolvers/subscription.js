const Subscription = {
  voteSub: async (_, { pollId }, ctx) => {
    const votes = await ctx.prisma.vote.findMany({
      where: {
        polls_id: pollId
      },
      include: {
        options: true
      }
    })
    return votes
  }
}

export { Subscription }
