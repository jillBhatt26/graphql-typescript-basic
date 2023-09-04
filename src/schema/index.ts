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
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
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
`;

export default typeDefs;
