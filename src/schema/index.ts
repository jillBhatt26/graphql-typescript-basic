/**
 * NOTES:
 * -> Types in graphql:
 *      -> int, float, String, boolean, ID
 */

const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # NOTE: The query type is mandatory in every graphql typeDef string
    type Query {
        reviews: [Review]
        review(id: ID!): Review # NOTE: id is a query variable of type ID and is mandatory
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(newGameData: AddGameInput!): Game
        deleteGame(id: ID!): Boolean
        updateGame(id: ID!, EditGameInput: EditGameInput!): Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`;

export default typeDefs;
