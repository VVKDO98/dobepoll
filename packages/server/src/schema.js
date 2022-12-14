const typeDefs = `
  type Options {
    id : Int
    name : String
    polls_id : Int
    poll : Poll
  }

  type Poll {
    id: ID
    name: String
    description: String
    created_at: String
    options: [Options]
  }

  type Response {
    poll: Poll
    option: Options
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
  }

  type Mutation {
    addPoll(name: String!, description: String): Poll 
    addOptions(name: String!): Poll 
    addPollWithOptions(poll: PollInput!):Response
  }
`
export {
  typeDefs
}
