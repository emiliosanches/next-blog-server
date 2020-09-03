import { KnexBlogPostsRepository } from "../../repositories/implementations/Knex/tables/KnexBlogPostsRepository";
import { GetBlogPostUseCase } from "./GetBlogPostUseCase";
import { GetBlogPostController } from "./GetBlogPostController";

const knexBlogPostsRepository = new KnexBlogPostsRepository();

const getBlogPostUseCase = new GetBlogPostUseCase(knexBlogPostsRepository);

const getBlogPostController = new GetBlogPostController(getBlogPostUseCase);

export { getBlogPostUseCase, getBlogPostController }