import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const mutation = gql`
  mutation ChangeBookTitle($input: ChangeBookInput!) {
    changeBookTitle(input: $input) {
      id
      title
    }
  }
`;

export default () => {
  let [mutate] = useMutation(mutation);

  return ({ id, title }) => {
    mutate({
      variables: { input: { id, title } },
      optimisticResponse: {
        changeBookTitle: {
          __typename: 'Book',
          id,
          title,
        },
      },
    });
  };
};
