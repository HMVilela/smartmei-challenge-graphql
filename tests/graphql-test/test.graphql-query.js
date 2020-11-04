const EasyGraphQLTester = require("easygraphql-tester");
const { validQuery, wrongQuery } = require("./graphql-query.mock");

const {
    typeDefs,
    resolvers
  } = require("../../src/server.js");

  describe("GraphQL Test", function () {
    let tester;
    // Easy GraphQL Tester
    tester = new EasyGraphQLTester(typeDefs, resolvers); 
  
    describe("TransferTaxConsult Query", function () {
      it("Valid Query", async () => {
        await tester.test(true, validQuery);
      });
      it("Wrong Query", async () => {
        await tester.test(false, wrongQuery);
      });
    });  
  });
  