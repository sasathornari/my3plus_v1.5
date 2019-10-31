import { Router } from 'express';

import projectController from '../controllers/projectController';

class ProjectRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        // GET DATA
        this.router.get('/user', projectController.getAllUserLogin);
        this.router.get('/user/:user,:pass', projectController.getUserLogin);
        this.router.get('/user/:empId', projectController.getUserLoginByEmpId);
        this.router.get('/emp/:user', projectController.getEmpIdByUsername);
        this.router.get('/login/:name', projectController.getUserLoginByUsername);
        this.router.get('role/:role', projectController.getUserLoginByRole);

        this.router.get('/', projectController.getProjects);
        this.router.get('/:id', projectController.getProjectsId);

        this.router.post('/create', projectController.ceateProjects);
        this.router.post('/assign', projectController.ceateProjectsAssign);
        
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;