const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Book {
//     _id: ID
//     title: String
//     author: String
//     pages: Int
//   }

//   type Query {
//     books: [Book]
//     book(title: String!): Book
//   }

//   type Mutation {
//     addBook(title: String!, author: String!, pages: Int!): Book
//   }
// `;

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: Int
    link: [Reaction]
  }

  type Auth {
    token: ID
    user: String
  }

  type Query {
    me: [User]
    // user(username: String!): User
    // thoughts(username: String): [Thought]
    // thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: String!, description: String!, titile: String!, bookId: String!, image: Int!, link: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
