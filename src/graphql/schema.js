const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar IsoDate

  type TaxConsult {
    description: String
    valueBRL: Float
    valueUSD: Float
    valueEUR: Float
    date: IsoDate
  }

  type Query {
    taxConsult(url: String!): TaxConsult
  }
`;

module.exports = typeDefs;