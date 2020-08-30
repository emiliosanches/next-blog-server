import mysql from 'mysql';

import { IBlogPostsRepository } from "../../../IBlogPostsRepository";
import { BlogPost } from "../../../../entities/BlogPost";
import { credentials } from '../../../../../credentials';
import { uuid } from 'uuidv4';
import { Connection } from '../Connection';

export class MySQLBlogPostsRepository implements IBlogPostsRepository {

    constructor(
        private conn = new Connection(credentials.dbConnection.mysql)
    ) {}

    async get(id: string): Promise<BlogPost> {
        return new Promise((resolve, reject) => {
            this.conn.query(
                'SELECT * FROM TBBlogPosts WHERE id = ?',
                [id]
            ).then(result  => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    async index(): Promise<BlogPost[]> {
        throw new Error("Method not implemented.");
    }

    async save(post: BlogPost): Promise<string> {
        const id = uuid();

        return new Promise((resolve, reject) => {
            this.conn.query(
                'INSERT INTO TBBlogPosts(id, title, body, author, created_at, image_url) VALUES(?, ?, ?, ?, ?, ?)',
                [id, post.title, post.body, post.author, post.date, post.imageURL]
            ).then(() => {
                resolve(id);
            }).catch(err => {
                reject(err);
            });
        });
    } 
}