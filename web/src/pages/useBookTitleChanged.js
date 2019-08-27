import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

export const subscription = gql`
  subscription BookTitleChanged {
    bookTitleChanged {
      id
      title
      author
    }
  }
`;

export default () => useSubscription(subscription);
