import { IBlogPostsRepository } from "../../repositories/IBlogPostsRepository";

export class IndexBlogPostsUseCase {
    constructor(
        private blogPostsRepository: IBlogPostsRepository
    ) { }

    async execute() {
        const post = await this.blogPostsRepository.index();
        return post;
    }
}