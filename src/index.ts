import { expressMiddleware }  from "@apollo/server/express4"
import { buildContext }  from "graphql-passport"
import { ApolloServer } from "@apollo/server"
import { resolvers }  from "./resolvers"
import { loadFiles } from '@graphql-tools/load-files'
import { connectDB } from "./db"
import "reflect-metadata"

const express = require('express')

const app = express()
app.use(express.json());


(async () => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
  });
  
  connectDB
  await server.start();
  
  app.use(
    '/graphql',
    expressMiddleware(
      server, {
      context: async ({ req, res }) => (
        buildContext({ req, res })
      )
    }),
  );

  
  app.listen(3000, () => {
    console.log(`Mi port 3000`);
  });
})()
