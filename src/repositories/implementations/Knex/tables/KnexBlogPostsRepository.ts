import mysql from 'mysql';

import { IBlogPostsRepository } from "../../../IBlogPostsRepository";
import { BlogPost } from "../../../../entities/BlogPost";
import { credentials } from '../../../../credentials';
import { uuid } from 'uuidv4';
import { connection as knex } from '../Connection';

export class KnexBlogPostsRepository implements IBlogPostsRepository {

    async get(id: string): Promise<BlogPost> {
        const rows = await knex('TBBlogPosts').select<BlogPost[]>('*').where('id', id);

        return rows[0];
    }

    async index(): Promise<BlogPost[]> {
        const rows = await knex('TBBlogPosts').select<BlogPost[]>('*');

        return rows;
    }

    async save(post: BlogPost): Promise<string> {
        await knex('TBBlogPosts').insert<BlogPost>(post);
        return post.id;
    } 
}