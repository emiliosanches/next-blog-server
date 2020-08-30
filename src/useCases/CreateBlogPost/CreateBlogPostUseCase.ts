import { IBlogPostsRepository } from "../../repositories/IBlogPostsRepository";
import { ICreateBlogPostRequestDTO } from "./CreateBlogPostDTO";
import { BlogPost } from "../../entities/BlogPost";

export class CreateBlogPostUseCase {
    constructor(
        private blogPostsRepository: IBlogPostsRepository
    ) { }

    async execute(data: ICreateBlogPostRequestDTO): Promise<string> {
        const blogPost = new BlogPost(data);
        
        return new Promise((resolve, reject) => {
            this.blogPostsRepository.save(blogPost).then(id => {
                return resolve(id);
            }).catch(err => {
                return reject(err);
            });
        })
    }
}