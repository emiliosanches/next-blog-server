import { Router } from 'express';
import { createBlogPostController } from './useCases/CreateBlogPost';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World!');
});
routes.post('/create-blog-post', createBlogPostController.handle);

export { routes };