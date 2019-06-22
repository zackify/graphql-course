export const resolvers = {
  Query: {
    books: () => {
      return [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
      ];
    },
    authors: () => {
      return [
        { name: 'Todd', twitter: 'toddmotto' },
        { name: 'React', twitter: 'reactjs' },
      ];
    },
  },
  Mutation: {
    addAuthor: (_, { input: { name, twitter } }) => {
      return {
        name,
        twitter,
      };
    },
  },
};
