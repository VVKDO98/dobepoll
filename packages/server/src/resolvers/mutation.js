import { prisma } from '../database.js'

const Mutation = {
  /* Variable example
    {
      "poll":{
        "name":"Hello",
        "description":"Lorem zipsum555555",
        "options":[
          {"name":"test3"},
          {"name":"test23"}
        ]
      }
    }
   */
  addPollWithOptions: async (_, { poll }, ctx, info) => {
    try {
      const resPoll = await prisma.polls.create({
        data: {
          name: poll.name,
          description: poll.description,
          options: {
            create: poll.options
          }
        }
      })
      return { poll: resPoll }
    } catch (e) {
      console.log(e)
    }
  },
  vote: async (_, { vote }, ctx, info) => {
    try {
      console.log(vote.polls_id + '' + ctx.ip)
      const resVote = await prisma.votes.upsert({
        where: {
          identifier: vote.polls_id + '' + ctx.ip
        },
        update: {
          ipadress: ctx.ip,
          options_id: vote.options_id
        },
        create: {
          identifier: vote.polls_id + '' + ctx.ip,
          ipadress: ctx.ip,
          polls_id: vote.polls_id,
          options_id: vote.options_id
        }
      })
      return resVote ? 'Vote updated' : null
    } catch (e) { console.log(e) }
  }
}

export {
  Mutation
}
