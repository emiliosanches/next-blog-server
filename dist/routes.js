"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var CreateBlogPost_1 = require("./useCases/CreateBlogPost");
var GetBlogPost_1 = require("./useCases/GetBlogPost");
var IndexBlogPosts_1 = require("./useCases/IndexBlogPosts");
var routes = express_1.Router();
exports.routes = routes;
routes.get('/', function (req, res) {
    return res.send('Hello World!');
});
routes.post('/blog-post', function (req, res) { return CreateBlogPost_1.createBlogPostController.handle(req, res); });
routes.get('/blog-post/:id', function (req, res) { return GetBlogPost_1.getBlogPostController.handle(req, res); });
routes.get('/blog-posts', function (req, res) { return IndexBlogPosts_1.indexBlogPostsController.handle(req, res); });
