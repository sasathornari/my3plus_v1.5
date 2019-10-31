import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import portalRoutes from './routes/portalRoutes';
import projectRoutes from './routes/projectRoutes';
import uploadRoutes from './routes/uploadRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3005);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api', indexRoutes);
        this.app.use('/api/portal', portalRoutes);
        this.app.use('/api/project', projectRoutes);
        this.app.use('/api/upload', uploadRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'),() => {
            console.log('Server on port ', this.app.get('port'));
            console.log('Start connection.........\n');
        });
    }

}

const server = new Server();
server.start();