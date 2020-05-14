"use strict";

import { Application } from "express";
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    users:[Int]
    products:[String]
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  users: () => {
    return [1, 2, 3];
  },
  products: () => {
    return ["My Product"];
  },
  rollDice: ({ numDice, numSides }: any) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
};

module.exports = function (app: Application) {
  app.use(
    "/api",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );
};
