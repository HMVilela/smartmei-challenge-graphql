const { ApolloServer } = require('apollo-server');

// Using GraphQL resources
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// Init server with GraphQL modules
const server = new ApolloServer({ typeDefs, resolvers, uploads: false }); 
 
server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = {
  server,
  typeDefs,
  resolvers,
};