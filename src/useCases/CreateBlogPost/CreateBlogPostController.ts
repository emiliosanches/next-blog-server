import { Request, Response } from 'express';
import { CreateBlogPostUseCase } from './CreateBlogPostUseCase';

export class CreateBlogPostController {
    constructor(
        private createBlogPostUseCase: CreateBlogPostUseCase
    ) { }
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            title,
            imageURL,
            body,
            author,
        } = req.body;

        try {
            await this.createBlogPostUseCase.execute({
                title,
                imageURL,
                body,
                author
            });

            return res.status(201).send();
        } catch(err) {
            return res.status(400).json({
                message: err.message || 'An unexpected error ocurred.'
            });
        }
    }
}