import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server";

let server = new ApolloServer({ typeDefs, resolvers, tracing: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
