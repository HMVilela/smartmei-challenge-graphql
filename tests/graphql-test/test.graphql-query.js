const EasyGraphQLTester = require("easygraphql-tester");
const { validQuery, wrongQuery } = require("./graphql-query.mock");

const {
    typeDefs,
    resolvers
  } = require("../../src/server.js");

  // Test and compare if GraphQL service is returnig correct data on querys
  describe("GraphQL Test", function () {
    let tester;    
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
  