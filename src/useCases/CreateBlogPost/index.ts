import { KnexBlogPostsRepository } from "../../repositories/implementations/Knex/tables/KnexBlogPostsRepository";
import { CreateBlogPostUseCase } from "./CreateBlogPostUseCase";
import { CreateBlogPostController } from "./CreateBlogPostController";

const knexBlogPostsRepository = new KnexBlogPostsRepository();

const createBlogPostUseCase = new CreateBlogPostUseCase(knexBlogPostsRepository);

const createBlogPostController = new CreateBlogPostController(createBlogPostUseCase);

export { createBlogPostUseCase, createBlogPostController }