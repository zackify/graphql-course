import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  query Books {
    books {
      id
      title
      author
    }
  }
`;

export default () => useQuery(query);
