import { BlogPost } from "../entities/BlogPost";

export interface IBlogPostsRepository {
    get(id: string): Promise<BlogPost>;
    index(): Promise<BlogPost[]>;
    save(post: BlogPost): Promise<string>;
}