"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_handler_1 = __importDefault(require("./handlers/users.handler"));
var product_handler_1 = __importDefault(require("./handlers/product.handler"));
var order_handler_1 = __importDefault(require("./handlers/order.handler"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
(0, users_handler_1.default)(app);
(0, product_handler_1.default)(app);
(0, order_handler_1.default)(app);
app.get("/", function (req, res) { return res.send("Hello World!"); });
app.listen(port, function () { return console.log("Example app listening on port ".concat(port, "!")); });
exports.default = app;
