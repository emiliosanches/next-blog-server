import { Router } from 'express';
import { createBlogPostController } from './useCases/CreateBlogPost';
import { getBlogPostController } from './useCases/GetBlogPost';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World!');
});
routes.post('/blog-post', (req, res) => createBlogPostController.handle(req, res));
routes.get('/blog-post/:id', (req, res) => getBlogPostController.handle(req, res));
//routes.get('/blog-posts', indexBlogPostController.handle);

export { routes };