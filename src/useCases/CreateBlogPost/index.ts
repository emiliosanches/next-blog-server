import { MySQLBlogPostsRepository } from "../../repositories/implementations/MySQL/tables/MySQLBlogPostsRepository";
import { CreateBlogPostUseCase } from "./CreateBlogPostUseCase";
import { CreateBlogPostController } from "./CreateBlogPostController";

const mySQLBlogPostsRepository = new MySQLBlogPostsRepository();

const createBlogPostUseCase = new CreateBlogPostUseCase(mySQLBlogPostsRepository);

const createBlogPostController = new CreateBlogPostController(createBlogPostUseCase);

export { createBlogPostUseCase, createBlogPostController }