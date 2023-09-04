import { nanoid } from 'nanoid';
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
    },
    Game: {
        reviews(parent: any) {
            return db.reviews.filter(review => review.game_id === parent.id);
        }
    },
    Author: {
        reviews(parent: any) {
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    Review: {
        author(parent: any) {
            return db.authors.find(author => author.id === parent.author_id);
        },
        game(parent: any) {
            return db.games.find(game => game.id === parent.game_id);
        }
    },
    Mutation: {
        addGame(
            _: any,
            args: { newGameData: { title: string; platform: string[] } }
        ) {
            const newGame = { ...args.newGameData, id: nanoid() };

            db.games.push(newGame);

            return newGame;
        },
        deleteGame(_: any, args: { gameID: string }) {
            db.games = db.games.filter(game => game.id !== args.gameID);

            return db.games.find(game => game.id === args.gameID) === undefined;
        },
        updateGame(
            _: any,
            args: {
                editGameData: {
                    id: string;
                    edits: {
                        title?: string;
                        platform?: string[];
                    };
                };
            }
        ) {
            const {
                editGameData: { id, edits }
            } = args;

            const toUpdateGameIndex = db.games.findIndex(
                game => game.id === id
            );

            if (toUpdateGameIndex < 0) return;

            const updatedGameData = {
                ...db.games[toUpdateGameIndex],
                ...edits
            };

            db.games[toUpdateGameIndex] = updatedGameData;

            return updatedGameData;
        }
    }
};

export default resolvers;
