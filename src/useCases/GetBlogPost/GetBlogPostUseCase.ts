import { IBlogPostsRepository } from "../../repositories/IBlogPostsRepository";
import { IGetBlogPostRequestDTO } from "./GetBlogPostDTO";
import { BlogPost } from "../../entities/BlogPost";

export class GetBlogPostUseCase {
    constructor(
        private blogPostsRepository: IBlogPostsRepository
    ) { }

    async execute(data: IGetBlogPostRequestDTO) {
        const post = await this.blogPostsRepository.get(data.id);
        return post;
    }
}