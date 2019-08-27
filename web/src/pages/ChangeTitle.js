import React, { useState, useEffect } from "react";
import useChangeBookTitleMutation from "./useChangeBookTitleMutation";

const ChangeTitle = ({ book }) => {
  let changeTitle = useChangeBookTitleMutation();
  let [title, setTitle] = useState(book.title);

  useEffect(() => {
    setTitle(book.title);
  }, [setTitle, book]);

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => changeTitle({ id: book.id, title })}>
        Change it!
      </button>
    </div>
  );
};

export default ChangeTitle;
