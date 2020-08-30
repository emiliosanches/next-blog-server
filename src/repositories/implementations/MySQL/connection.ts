import mysql from 'mysql';
import { BlogPost } from '../../../entities/BlogPost';


interface ICredentials {
    host: string;
    user: string;
    password: string;
    database: string;
}

export class Connection {

    private conn: mysql.Connection;

    constructor(credentials: ICredentials) {
        this.conn = mysql.createConnection({
            host: credentials.host,
            user: credentials.user,
            password: credentials.password,
            database: credentials.database
        });
    }

    async query(query: string, params?: Array<string | number | boolean | undefined>): Promise<BlogPost> {
        const parsedParams = params?.map(param => param || null)
        
        return new Promise((resolve, reject) => {
            this.conn.connect((err) => {
                if (err) return reject(err);
                this.conn.query(
                    query,
                    [...parsedParams],
                    (err, result) => {
                        this.conn.end();
                        if (err) return reject(err);
                        return resolve(result);
                    }
                )
            })
        });
    }
}