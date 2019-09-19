# Quick Summary

- brief server structure overview
- Type Defs on the server
- Resolver for books and explain the params each resolver has
- GraphQL Playground after, show doc section with custom info
- Show tracing section, simulate book title taking time to process

- Start web app
- show nav.js using the first book from a list in the api
- show the books page rendering all the books
- show the network tab only calling one time even though two places use it
- show the state update in the nav without having to do anything special after calling change book

- set a fake delay inside changeBook, and then use optimisticResponse in the mutation to show you you can keep the ui instantly updated
- show delete book and how the manual store update works, and why it is needed
- Show changeBookTitle resolver and explain the pub sub part
- Open useBookTitleChanged, then open books.js and uncomment the subscription