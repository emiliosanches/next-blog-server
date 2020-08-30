import { MySQLBlogPostsRepository } from "../../repositories/implementations/MySQL/tables/MySQLBlogPostsRepository";
import { IndexBlogPostsUseCase } from "./IndexBlogPostsUseCase";
import { IndexBlogPostsController } from "./IndexBlogPostsController";

const mySQLBlogPostsRepository = new MySQLBlogPostsRepository();

const indexBlogPostsUseCase = new IndexBlogPostsUseCase(mySQLBlogPostsRepository);

const indexBlogPostsController = new IndexBlogPostsController(indexBlogPostsUseCase);

export { indexBlogPostsUseCase, indexBlogPostsController }