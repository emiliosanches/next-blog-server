"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = express_1.default();
var port = process.env.PORT || 25565;
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(port, function () {
    console.log("Listening on port " + port);
});
