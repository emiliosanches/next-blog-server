import { Request, Response } from 'express';
import { IndexBlogPostsUseCase } from './IndexBlogPostsUseCase';

export class IndexBlogPostsController {
    constructor(
        private indexBlogPostsUseCase: IndexBlogPostsUseCase
    ) { }
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            id
        } = req.params;

        try {
            const post = await this.indexBlogPostsUseCase.execute();

            return res.status(200).json(post);
        } catch(err) {
            return res.status(400).json({
                message: err.message || 'An unexpected error ocurred.'
            });
        }
    }
}