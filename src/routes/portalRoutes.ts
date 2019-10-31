import { Router } from 'express';
import portalController from '../controllers/portalController';

class PortalRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        // CREATE DATA 
        this.router.post('/post-create', portalController.createNewPost);

        // READ DATA PORTAL INTRANET OF GEL
        this.router.get('/cate', portalController.getPostCategory);
        this.router.get('/post', portalController.getAllPost);
        this.router.get('/post/:id', portalController.getPostById);

        // UPDATE DATA
        this.router.put('/post-update/:id', portalController.updatPost);

        // DELETE DATA
        this.router.delete('/post/:id', portalController.deletePost);

    }
}

const portalRoutes = new PortalRoutes();
export default portalRoutes.router;