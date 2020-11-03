import { Application } from 'express';
import server from './server';
let runServer = async () => {
    let serverConfig = await server.app();
    let app: Application = serverConfig.app;
    let grapqlServer = serverConfig.graphqlServer;
    const PORT = process.env.PORT || 8001;
    app.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready and listening at ==> http://localhost:${PORT}${grapqlServer.graphqlPath}`);
    });
}

runServer().catch((error) => {
    console.log(error, 'error');
})