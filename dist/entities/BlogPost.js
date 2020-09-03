"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPost = void 0;
var uuidv4_1 = require("uuidv4");
var BlogPost = /** @class */ (function () {
    function BlogPost(props, id) {
        Object.assign(this, props);
        if (id)
            this.id = id;
        else
            this.id = uuidv4_1.uuid();
    }
    return BlogPost;
}());
exports.BlogPost = BlogPost;
