"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const portalRoutes_1 = __importDefault(require("./routes/portalRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3005);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api', indexRoutes_1.default);
        this.app.use('/api/portal', portalRoutes_1.default);
        this.app.use('/api/project', projectRoutes_1.default);
        this.app.use('/api/upload', uploadRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
            console.log('Start connection.........\n');
        });
    }
}
const server = new Server();
server.start();
