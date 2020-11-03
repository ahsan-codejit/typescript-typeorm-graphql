import { ApolloServer } from "apollo-server-express";
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import Express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

// resolvers
import { UserResolver } from './graphql/resolvers/user';

const routes = (app: Application) => {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({});
    });
    app.get('*', (req: Request, res: Response) => {
        res.status(404).json({ "message": "PageNotFound" });
    });
}

const app = async () => {
    dotenv.config();
    const connection = await createConnection();
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    const app: Application = Express();
    const graphqlServer = new ApolloServer({ schema });
    graphqlServer.applyMiddleware({ app });
    routes(app);
    return { app, graphqlServer };
};
export default { app };