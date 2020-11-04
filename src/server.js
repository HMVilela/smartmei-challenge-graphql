const { ApolloServer } = require('apollo-server');

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
  
const server = new ApolloServer({ typeDefs, resolvers, uploads: false }); 
 
server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = {
  server,
  typeDefs,
  resolvers,
};