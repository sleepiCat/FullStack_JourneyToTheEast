import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import passport from "passport";
import session from "express-session";
import connectToMongoAlias from "connect-mongodb-session";

import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer"

// import { startStandaloneServer } from "@apollo/server/standalone"
import { mergedTypeDefs } from "./typeDefs/index.js";
import { mergedResolvers } from "./resolvers/index.js";
import { connectDB } from "./db/connectDB.js";
import { configurePassport } from "./passport/passport.config.js";

import { buildContext } from "graphql-passport";
dotenv.config();

// the configurePassport function is called to set up the passport middleware
// this function is imported from the passport.config.js file
// it sets up the passport middleware by defining the serializeUser, deserializeUser, and GraphQLLocalStrategy functions
configurePassport();

// Create an express server and a GraphQL endpoint
const app = express();

// Create an instance of httpServer to pass to ApolloServer constructor as a plugin to handle server draining
// This is necessary to allow the server to gracefully shut down when the process is terminated
const httpServer = http.createServer(app);

// Create a new MongoDBStore instance to store session data in MongoDB
// connectToMongoAlias is a function that takes the session object and returns a new class
// This is necessary because the connect-mongodb-session package does not export a class directly
const MongoDBStore = connectToMongoAlias(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
})



store.on("error", (error) => {console.log(error)})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, // we don't want to save multiple sessions from the same user
  saveUninitialized: false, // don't save empty sessions
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true, // cookie is only accessible by the server, prevents cross-site scripting attacks
  },
  store: store,
}))

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})
 
// const { url } = await startStandaloneServer(server)

await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  '/',
  cors({
    origin: 'http://localhost:3000',
    credentials: true, // enable passing cookies from client to server
  }),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    // context is an object that is shared by all resolvers
    context: async ({ req, res }) => buildContext({req, res}),
  }),
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB();

console.log(`🚀 Server ready at http://localhost:4000/`);
//console.log(`🚀 Server ready at ${url}`)