"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var product_model_1 = require("../models/product.model");
var order_model_1 = require("../models/order.model");
var usModel = new user_model_1.userModel();
var proModel = new product_model_1.productModel();
var ordModel = new order_model_1.orderModel();
describe("test user model", function () {
    it("should have index user", function () {
        expect(usModel.index).toBeDefined();
    });
    it("should have create user", function () {
        expect(usModel.create).toBeDefined();
    });
    it("should have show user", function () {
        expect(usModel.show).toBeDefined();
    });
    it("should have authenticate", function () {
        expect(usModel.authenticate).toBeDefined();
    });
});
describe("test product model", function () {
    it("should have index product", function () {
        expect(proModel.index).toBeDefined();
    });
    it("should have create product", function () {
        expect(proModel.create).toBeDefined();
    });
    it("should have show product", function () {
        expect(proModel.show).toBeDefined();
    });
});
describe("test order model", function () {
    it("should have index order", function () {
        expect(ordModel.index).toBeDefined();
    });
    it("should have create order", function () {
        expect(ordModel.create).toBeDefined();
    });
    it("should have show order", function () {
        expect(ordModel.show).toBeDefined();
    });
    it("should have addProduct", function () {
        expect(ordModel.addProduct).toBeDefined();
    });
    it("should have show productsInOrders", function () {
        expect(ordModel.productsInOrders).toBeDefined();
    });
});
it("create method should add a user", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usModel.create({
                    first_name: "mahmoud",
                    last_name: "ahmed",
                    password: "123",
                })];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    first_name: "mahmoud",
                    last_name: "ahmed",
                    password: user_model_1.hash,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should show a user", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usModel.show(1)];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    first_name: "mahmoud",
                    last_name: "ahmed",
                    password: user_model_1.hash,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should authenticate a user", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usModel.authenticate(1, "123")];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    first_name: "mahmoud",
                    last_name: "ahmed",
                    password: user_model_1.hash,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should index a user", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usModel.index()];
            case 1:
                result = _a.sent();
                expect(result).toEqual([
                    {
                        id: 1,
                        first_name: "mahmoud",
                        last_name: "ahmed",
                        password: user_model_1.hash,
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
it("create method should add a product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, proModel.create({
                    name: "TV",
                    price: 222,
                })];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    name: "TV",
                    price: 222,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should show a product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, proModel.show(1)];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    name: "TV",
                    price: 222,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should index a product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, proModel.index()];
            case 1:
                result = _a.sent();
                expect(result).toEqual([
                    {
                        id: 1,
                        name: "TV",
                        price: 222,
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
it("create method should add a order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ordModel.create({
                    userid: 1,
                    order_status: "active",
                })];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    userid: "1",
                    order_status: "active",
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should show a order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ordModel.show(1)];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    userid: "1",
                    order_status: "active",
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should index a order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ordModel.index()];
            case 1:
                result = _a.sent();
                expect(result).toEqual([
                    {
                        id: 1,
                        userid: "1",
                        order_status: "active",
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
it("create method should add product to order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ordModel.addProduct({
                    orderid: 1,
                    productid: 1,
                    quantity: 6,
                })];
            case 1:
                result = _a.sent();
                expect(result).toEqual({
                    id: 1,
                    orderid: "1",
                    productid: "1",
                    quantity: 6,
                });
                return [2 /*return*/];
        }
    });
}); });
it("create method should show product in order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ordModel.productsInOrders()];
            case 1:
                result = _a.sent();
                expect(result).toEqual([
                    {
                        name: "TV",
                        price: 222,
                        orderid: "1",
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
