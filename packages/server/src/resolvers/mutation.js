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
  addPollWithOptions: async (_, { poll, options }) => {
    console.log(poll, options)
    try {
      const resPoll = await prisma.polls.create({
        data: poll
      })
      const resOptions = await prisma.options.create({
        data: Object.assign({ polls_id: resPoll.id }, options)
      })
      console.log(resPoll, resOptions)
      return { poll: resPoll, option: resOptions }
    } catch (e) {
      console.log(e)
    }
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
  addPollWithOptions2: async (_, { poll }) => {
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
