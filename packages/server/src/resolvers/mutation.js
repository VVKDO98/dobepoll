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
  },

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
  addPollWithOptions: async (_, { poll }) => {
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
  }

}

export {
  Mutation
}
