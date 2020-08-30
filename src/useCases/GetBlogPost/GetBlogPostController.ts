import { Request, Response } from 'express';
import { GetBlogPostUseCase } from './GetBlogPostUseCase';

export class GetBlogPostController {
    constructor(
        private getBlogPostUseCase: GetBlogPostUseCase
    ) { }
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            id
        } = req.params;

        try {
            const post = await this.getBlogPostUseCase.execute({
                id
            });

            return res.status(200).json(post);
        } catch(err) {
            return res.status(400).json({
                message: err.message || 'An unexpected error ocurred.'
            });
        }
    }
}