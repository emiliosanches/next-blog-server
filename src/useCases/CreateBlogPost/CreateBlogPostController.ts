import { Request, Response } from 'express';
import { CreateBlogPostUseCase } from './CreateBlogPostUseCase';

export class CreateBlogPostController {
    constructor(
        private createBlogPostUseCase: CreateBlogPostUseCase
    ) { }
    
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            title,
            image_url,
            body,
            author,
        } = req.body;

        try {
            const date = new Date();
            const parsedDate =
                date.getFullYear().toString() +
                '-' + date.getMonth().toString() +
                '-' + date.getDate().toString();

            const id = await this.createBlogPostUseCase.execute({
                title,
                image_url,
                body,
                author,
                created_at: parsedDate
            });

            return res.status(201).json({
                id
            });
        } catch(err) {
            return res.status(400).json({
                message: err.message || 'An unexpected error ocurred.'
            });
        }
    }
}