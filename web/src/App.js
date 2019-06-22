import React from 'react';
import Nav from './Nav';
import apolloClient from './apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';

import Books from './pages/Books';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <React.Fragment>
      <Nav />
      <Books />
    </React.Fragment>
  </ApolloProvider>
);

export default App;
