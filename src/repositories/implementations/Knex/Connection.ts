import Knex from 'knex';

import { credentials } from '../../../../credentials';

const { dbConnection: { mysql: mySQLCredentials } } = credentials; 

export const connection = Knex({
    client: 'mysql',
    connection: mySQLCredentials
});