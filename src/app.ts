import { Route } from 'core/interface';
import express from 'express';

class App {
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]) {
        this.app = express();
        this.port = process.env.PORT || 5000;

        this.initializeRoutes(routes)
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port);
        });
    }
    private initializeRoutes(routers: Route[]) {
        routers.forEach(route => {
            this.app.use('/', route.router)
        });
    }
}
export default App;