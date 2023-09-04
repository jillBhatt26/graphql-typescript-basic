import db from '../db';
import { TAuthorArgs, TGameArgs, TReviewArgs } from '../types';

const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_: any, args: TGameArgs) {
            const gameID = args.id;

            return db.games.find(game => game.id === gameID);
        },
        reviews() {
            return db.reviews;
        },
        review(_: any, args: TReviewArgs) {
            const reviewID = args.id;

            return db.reviews.find(review => review.id === reviewID);
        },
        authors() {
            return db.authors;
        },
        author(_: any, args: TAuthorArgs) {
            const authorID = args.id;

            return db.authors.find(author => author.id === authorID);
        }
    }
};

export default resolvers;
