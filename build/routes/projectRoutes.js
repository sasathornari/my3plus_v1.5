"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = __importDefault(require("../controllers/projectController"));
class ProjectRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // GET DATA
        this.router.get('/user', projectController_1.default.getAllUserLogin);
        this.router.get('/user/:user,:pass', projectController_1.default.getUserLogin);
        this.router.get('/user/:empId', projectController_1.default.getUserLoginByEmpId);
        this.router.get('/emp/:user', projectController_1.default.getEmpIdByUsername);
        this.router.get('/login/:name', projectController_1.default.getUserLoginByUsername);
        this.router.get('role/:role', projectController_1.default.getUserLoginByRole);
        this.router.get('/', projectController_1.default.getProjects);
        this.router.get('/:id', projectController_1.default.getProjectsId);
        this.router.post('/create', projectController_1.default.ceateProjects);
        this.router.post('/assign', projectController_1.default.ceateProjectsAssign);
    }
}
const projectRoutes = new ProjectRoutes();
exports.default = projectRoutes.router;
