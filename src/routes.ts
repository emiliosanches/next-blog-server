import { Router } from 'express';
import { createBlogPostController } from './useCases/CreateBlogPost';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World!');
});
routes.post('/blog-post', (req, res) => createBlogPostController.handle(req, res));
//routes.get('/blog-post/:id', getBlogPostController.handle);
//routes.get('/blog-posts', indexBlogPostController.handle);

export { routes };