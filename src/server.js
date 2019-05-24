import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';

let server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// Development stuff, so our schema reloads when we save files
if (module.hot) {
  module.hot.accept(['./typeDefs', './resolvers'], () => {
    const { typeDefs } = require('./typeDefs');
    const { resolvers } = require('./resolvers');

    server.schema = makeExecutableSchema({ typeDefs, resolvers });
  });
}
