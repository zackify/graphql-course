import { gql } from "apollo-server";

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
    id: Int!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  input ChangeBookInput {
    id: Int!
    title: String!
  }

  type Mutation {
    changeBookTitle(input: ChangeBookInput!): Book
    addAuthor(input: AddAuthorInput!): Author
    deleteBook(title: String!): Boolean
  }

  type Subscription {
    bookTitleChanged: Book
  }
`;
