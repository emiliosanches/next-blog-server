import { MySQLBlogPostsRepository } from "../../repositories/implementations/MySQL/tables/MySQLBlogPostsRepository";
import { GetBlogPostUseCase } from "./GetBlogPostUseCase";
import { GetBlogPostController } from "./GetBlogPostController";

const mySQLBlogPostsRepository = new MySQLBlogPostsRepository();

const getBlogPostUseCase = new GetBlogPostUseCase(mySQLBlogPostsRepository);

const getBlogPostController = new GetBlogPostController(getBlogPostUseCase);

export { getBlogPostUseCase, getBlogPostController }