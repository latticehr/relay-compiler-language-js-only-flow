# js-only-flow

This is [`relay-compiler`](https://www.npmjs.com/package/relay-compiler)
[`language plugin`](https://relay.dev/docs/en/type-emission#language-plugins)
that emits `.graphql.js` files that _only_ contain the flowtype information.

## Why?

At [Lattice](https://lattice.com/) we love GraphQL, Relay, and Flow. Many of
our internal backend services speak to each over using GraphQL. One of the best
parts of using Relay on the client has been being able to type-check our code
against our GraphQL queries. But we wanted that same soundness when doing
server to server commination without using `react-relay`.

## Usage

Add something like this to your `package.json` file:

```
"scripts": {
  "graphql:gen": "relay-compiler --schema {{pathToSchema}} --src src --language js-only-flow"
}
```
