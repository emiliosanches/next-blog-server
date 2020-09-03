import { KnexBlogPostsRepository } from "../../repositories/implementations/Knex/tables/KnexBlogPostsRepository";
import { IndexBlogPostsUseCase } from "./IndexBlogPostsUseCase";
import { IndexBlogPostsController } from "./IndexBlogPostsController";

const knexBlogPostsRepository = new KnexBlogPostsRepository();

const indexBlogPostsUseCase = new IndexBlogPostsUseCase(knexBlogPostsRepository);

const indexBlogPostsController = new IndexBlogPostsController(indexBlogPostsUseCase);

export { indexBlogPostsUseCase, indexBlogPostsController }