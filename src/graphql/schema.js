const { gql } = require("apollo-server");

// GraphQL schema defined for the app scope
const typeDefs = gql`
  scalar IsoDate

  type TransferTaxConsult {
    description: String
    valueBRL: Float
    valueUSD: Float
    valueEUR: Float
    date: IsoDate
  }

  type Query {
    transferTaxConsult(url: String!): TransferTaxConsult
  }
`;

module.exports = typeDefs;