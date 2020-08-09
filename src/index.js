const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./schema');
const app = express();
const PORT = process.env.PORT;

console.log(process.env.PORT, process.env.MONGODB_URI)

const server = new ApolloServer({
  schema,
  uploads: {
    // Limits here should be stricter than config for surrounding
    // infrastructure such as Nginx so errors can be handled elegantly by
    // graphql-upload:
    // https://github.com/jaydenseric/graphql-upload#type-processrequestoptions
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20,
  },
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log('Connected')
      // ...
    },
    onDisconnect: (webSocket, context) => {
      console.log('Disconnected')
      // ...
    },
  },
});

// server.applyMiddleware({ app });
server.listen(process.env.PORT)

// const httpServer = http.createServer(app);
// server.installSubscriptionHandlers(httpServer);

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(process.env.MONGODB_URI, mongooseOptions, err => {
//   if (err) {
//     console.log(`Could not connect to database at ${process.env.MONGODB_URI}`);
//     process.exit(1);
//   }


//   console.log(`Successfully connected to database at ${process.env.MONGODB_URI}`);

//   httpServer.listen({ port: PORT }, err => {
//     if (err) {
//       console.log(`Could not connect to GraphQL Server!`);
//       process.exit(1);
//     }

//     console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
//     console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
//   });
// });

