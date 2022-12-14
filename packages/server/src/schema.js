const typeDefs = `
  type Options {
    id : ID!
    name : String
    polls_id : Int
    poll : Poll
    _count: Count
  }

  type Count {
    votes: Int
  }

  type Poll {
    id: ID!
    name: String
    description: String
    created_at: String
    options: [Options]
  }

  type Vote{
    id: ID!
    identifier: String
    polls_id: Int
    options_id: Int
    option: Options
    poll: Poll
  }


  input PollInput{
    name: String
    description:String
    options:[OptionsInput]
    id: Int
  }

  input VoteInput{
    options_id: Int
    polls_id: Int
    identifier: String
  }

  input OptionsInput{
    name: String
  }
  type Query {
    polls: [Poll],
    poll(id: Int): Poll
    options: [Options]
    getVotes: [Options]
    currentNumber: Int
  }

  type Mutation {
    addPollWithOptions(poll: PollInput!):PollResponse
    deletePoll(pollId: PollInput!):String
    vote(vote: VoteInput!):String
  }

  type Subscription {
    voteSub(pollId: Int): Poll
  }

  type PollResponse {
    poll: Poll
  }
`
export {
  typeDefs
}
