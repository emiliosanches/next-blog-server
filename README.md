# next-blog-server
RESTful API written in Express to serve a blog written in Next.JS  
  

## Introduction
This project is an API developed to serve [my anonymous blog developed in NextJS](https://github.com/emiliosanches/next-blog). 
Currently, it has only 3 routes: one for creation of a new blog post, one for indexing all the blog posts and one for getting info about one specific blog post.  
  

## Goals
My only goals with this project is to practice and learn about NextJS, which is a technology in which I'm starting my studies.
You can use this however you want. 

If you want to help, please consider cloning the project and helping with the development of new features.

## How to use it
You can clone this project and continue the development by yourself or develop new features to help me with this project development.  

**1.** Clone the project using:
  ```bash
    git clone https://github.com/emiliosanches/next-blog-server.git
  ```

**2.** Create a file called `credentials.ts`

**3.** Inside this file, export a json like:
```ts
export const credentials = {
    dbConnection: {
        mysql: {
            user: "mysqluser",
            password: "mypass",
            host: "hostname",
            database: "databasename"
        },
        mssql: {
            user: "mssqluser",
            password: "password",
            host: "hostname",
            database: "databasename"
        }
        /** 
        * Do it for every storage modes you have.
        * If you have any repository that is not a database,
        * create your own configuration mode.
        * Either, you can add more parameters to your object,
        * for example, the port (if you're not using the default port)
        */
    }
}
```

**4.** Inside the Connection file, at `/src/repositories/implementations/Knex/Connection.ts`, change the data you pass into the connection property, considering the format of the object you exported from `credentials.ts`. Example:

```ts
import Knex from 'knex';

import { credentials } from '../../../../credentials';

const yourDatabaseConnection = credentials.sub.property.connection; 

export const connection = Knex({
    client: 'mysql' // The database you are using. Remember to `yarn add` or `npm install` its driver
    connection: mySQLCredentials /**
                                * Use the data you need to connect. For example, to connect with
                                * mySQL, it needs to have: `host`, `user`, `password` and
                                * `database` properties. 
                                */
});
```

**5.** Currently, there is no migrations implementation, so you need to create your database and table(s) by yourself.
The format of table I'm using for the blog posts (at the moment, this is the only one table I have) is:
<table>
<thead>
<tr>
<th>id varchar(256)</th>
<th>title varchar(64)</th>
<th>body varchar(10240)</th>
<th>author varchar(32)</th>
<th>created_at date</th>
<th>image_url varchar(256)</th>
<tr>
</thead>

<tbody>
<tr>
<td>some-uuid-generated-automatically</td>
<td>Blog Post Title</td>
<td>Lorem Ipsum dolor sit amet. Consectetur...</td>
<td>null</td>
<td>2020-08-31</td>
<td>http://some-image-url.com/path-to-image.jpeg</td>
<tr>
</tbody>
</table>

**6.** Running the project
To run the project in development mode (using ts-node-dev, with transpile-only and respawn options):  
  `yarn dev` or `npm run dev`  
To run the project in production mode (using the dist/ folder and javascript files):  
  `yarn start` or `npm start`
  
## Thanks for reading and please consider contributing
