import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { query as booksQuery } from './useBooksQuery';

export const mutation = gql`
  mutation DeleteBook($title: String!) {
    deleteBook(title: $title)
  }
`;

export default () => {
  let [deleteBook] = useMutation(mutation);

  return title => {

    return deleteBook({
      variables: { title },
      update: store => {

        const data = store.readQuery({
          query: booksQuery,
        });

        store.writeQuery({
          query: booksQuery,
          data: {
            books: data.books.filter(
              currentBook => currentBook.title !== title,
            ),
          },
        });

      },
    });
  };
};
