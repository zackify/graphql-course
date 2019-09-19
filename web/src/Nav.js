import React from 'react';
import useBooksQuery from './pages/useBooksQuery';

const Nav = () => {
  let { data } = useBooksQuery();
  if (!data || !data.books) return null;

  return (
    <div>
      This is our amazing nav bar. The latest book in our collection is{' '}
      {data.books[0].title}
    </div>
  );
};

export default Nav;
