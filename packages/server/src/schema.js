const typeDefs = `
  type Options {
    id : ID!
    name : String
    polls_id : Int
    poll : Poll
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

  type Query {
    polls: [Poll],
    poll(id: Int): Poll
    options: [Options]
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
  }

  input OptionsInput{
    name: String
  }

  type Mutation {
    addPollWithOptions(poll: PollInput!):PollResponse
    deletePoll(pollId: PollInput!):String
    vote(vote: VoteInput!):String
  }

  type PollResponse {
    poll: Poll
  }
`
export {
  typeDefs
}
