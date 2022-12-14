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
    options: [Options]
  }

  type Query {
    polls: [Poll],
    poll(id: Int): Poll
    options: [Options]
  }

  type Mutation {
    addPoll(name: String, description: String): Poll
  }
`
export {
  typeDefs
}
