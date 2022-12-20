import { prisma } from '../database.js'
import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

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
      console.error(e)
    }
  },
  deletePoll: async (_, { pollId }, ctx, info) => {
    try {
      const resDelPoll = await prisma.polls.delete({
        where: {
          id: pollId.id
        }
      })
      return resDelPoll ? 'Poll deleted' : null
    } catch (e) { console.error(e) }
  },
  vote: async (_, { vote }, ctx, info) => {
    try {
      const resVote = await prisma.votes.upsert({
        where: {
          identifier: vote.polls_id + '' + vote.identifier
        },
        update: {
          options_id: vote.options_id
        },
        create: {
          identifier: vote.polls_id + '' + vote.identifier,
          ipadress: vote.identifier,
          polls_id: vote.polls_id,
          options_id: vote.options_id
        }
      })
      const getVotes = await prisma.polls.findUnique({
        where: {
          id: vote.polls_id
        },
        include: {
          options: {
            include: {
              _count: {
                select: { votes: true }
              }
            }
          }
        }
      })
      console.log(getVotes)
      pubsub.publish(`VOTE_ADDED_${vote.polls_id}`, { voteSub: getVotes })
      return resVote ? 'Vote updated' : null
    } catch (e) { console.error(e) }
  }
}

const Subscription = {
  voteSub: {
    subscribe: async (_, { pollId }) => {
      return pubsub.asyncIterator([`VOTE_ADDED_${pollId}`])
    }
  }
}

export {
  Mutation,
  Subscription
}
