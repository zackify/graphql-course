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
    """
    Name of person who wrote the book
    """
    author: String!
  }


  input ChangeBookInput {
    id: Int!
    title: String!
  }

  type Query {
    """
    Get the latest books in our library collection in order by newest
    """

    books: [Book]
    """
    this is a book
    """
    book(id: Int!): Book
    authors: [Author]
  }
  
  type Mutation {
    changeBookTitle(input: ChangeBookInput!): Book
    addAuthor(input: AddAuthorInput!): Author
    deleteBook(author: String!): Boolean
  }

  type Subscription {
    bookTitleChanged: Book
  }
`;
