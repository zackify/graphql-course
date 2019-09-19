import React from "react";
import useBooksQuery from "./useBooksQuery";
import useDeleteBookMutation from "./useDeleteBookMutation";
import ChangeTitle from "./ChangeTitle";
import useBookTitleChanged from "./useBookTitleChanged";

const Books = () => {
  useBookTitleChanged();
  let { data } = useBooksQuery();
  let deleteBook = useDeleteBookMutation();

  if (!data || !data.books) return null;

  return data.books.map(book => (
    <div key={book.id}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={() => deleteBook(book.title)}>Delete Book</button>
      <ChangeTitle book={book} />
    </div>
  ));
};

export default Books;
