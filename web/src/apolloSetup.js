import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
