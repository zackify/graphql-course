import { gql } from 'apollo-server';

export const typeDefs = gql`
  input AddAuthorInput {
    name: String!
    twitter: String
  }

  type Author {
    name: String!
    twitter: String
  }

  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author
  }
`;
