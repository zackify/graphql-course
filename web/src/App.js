import React from 'react';
import Nav from './Nav';
import apolloClient from './apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';

import QueryTest from './pages/QueryTest';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <React.Fragment>
      <Nav />
      <QueryTest />
    </React.Fragment>
  </ApolloProvider>
);

export default App;
