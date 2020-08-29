import { IBlogPostsRepository } from "../../repositories/IBlogPostsRepository";
import { ICreateBlogPostRequestDTO } from "./CreateBlogPostDTO";
import { BlogPost } from "../../entities/BlogPost";

export class CreateBlogPostUseCase {
    constructor(
        private blogPostsRepository: IBlogPostsRepository
    ) { }

    async execute(data: ICreateBlogPostRequestDTO) {
        const blogPost = new BlogPost(data);
        await this.blogPostsRepository.save(blogPost);
    }
}