"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var knex_1 = __importDefault(require("knex"));
var credentials_1 = require("../../../credentials");
var mySQLCredentials = credentials_1.credentials.dbConnection.mysql;
exports.connection = knex_1.default({
    client: 'mysql',
    connection: mySQLCredentials
});
