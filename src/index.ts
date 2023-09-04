import 'dotenv/config';

// contains logic to handle requests
import { ApolloServer } from '@apollo/server';

// starts the server to handle the requests
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema';
import resolvers from './resolvers';

const appServer = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = parseInt(process.env.PORT!);

startStandaloneServer(appServer, {
    listen: {
        port: PORT
    }
})
    .then(({ url }) => {
        console.log(`🚀...Server listening on: ${url}...🚀`);
    })
    .catch(error => {
        console.log(
            `Error occurred while starting standalone server: ${
                error.message || 'Something went wrong!'
            }`
        );
    });
