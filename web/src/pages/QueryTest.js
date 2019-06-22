import React from 'react';
import useBooksQuery from './useBooksQuery';
import useDeleteBookMutation from './useDeleteBookMutation';
import ChangeTitle from './ChangeTitle';

const QueryTest = () => {
  let { data } = useBooksQuery();
  let mutate = useDeleteBookMutation();

  if (!data || !data.books) return null;

  return data.books.map(book => (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={() => mutate(book.title)}>Delete Book</button>
      <ChangeTitle book={book} />
    </div>
  ));
};

export default QueryTest;
