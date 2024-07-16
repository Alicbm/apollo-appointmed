import { expressMiddleware }  from "@apollo/server/express4"
import { buildContext }  from "graphql-passport"
import { ApolloServer } from "@apollo/server"
import { resolvers }  from "./resolvers"
import { loadFiles } from '@graphql-tools/load-files'
import { connectDB } from "./db"
import cors from 'cors'
import "reflect-metadata"
import './utils/auth'

const express = require('express')

const app = express()
app.use(express.json());

(async () => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
  });
  
  connectDB
  
  app.use(cors({
    origin: 'https://appointmed.vercel.app/',
    credentials: true
  }))

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
