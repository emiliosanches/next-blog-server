import mysql from 'mysql';

import { IBlogPostsRepository } from "../IBlogPostsRepository";
import { BlogPost } from "../../entities/BlogPost";
import { credentials } from '../../../credentials';
import { uuid } from 'uuidv4';

export class MySQLBlogPostsRepository implements IBlogPostsRepository {

    constructor(
        private connection = mysql.createConnection({
            host: credentials.dbConnection.mysql.host,
            user: credentials.dbConnection.mysql.user,
            password: credentials.dbConnection.mysql.passwowrd,
            database: credentials.dbConnection.mysql.database
        })
    ) {}

    async get(id: string): Promise<BlogPost> {
        throw new Error("Method not implemented.");
    }

    async index(): Promise<BlogPost[]> {
        throw new Error("Method not implemented.");
    }

    async save(post: BlogPost): Promise<void> {
        this.connection.connect(err => {
            if (err) throw err;

            this.connection.query(
                'INSERT INTO TBBlogPosts(id, title, body, author, created_at, image_url) VALUES(?, ?, ?, ?, ?, ?)',
                [uuid(), post.title, post.body, post.author, post.date, post.imageURL],
                () => {
                    this.connection.end();
                }
            )
        })
    } 
}