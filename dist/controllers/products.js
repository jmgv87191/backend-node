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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.createProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const products_1 = __importDefault(require("../models/products"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_1.default.findAll();
    res.json(products);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const products = yield products_1.default.findByPk(id);
    if (products) {
        res.json(products);
    }
    else {
        res.json({
            msg: `no existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const products = yield products_1.default.findByPk(id);
    if (products) {
        products.destroy();
        res.json({
            msg: 'producto eliminado',
            products
        });
    }
    else {
        res.json({
            msg: `no existe un producto con el id ${id}`
        });
    }
});
exports.deleteProduct = deleteProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const products = products_1.default.create(body);
        res.json({
            msg: 'producto agregaro',
            body
        });
    }
    catch (error) {
        res.json({
            msg: 'ups algo paso'
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const products = yield products_1.default.findByPk(id);
        if (products) {
            products.update(body);
            res.json({
                msg: 'producto acutalizado',
                body
            });
        }
        else {
            res.json({
                msg: `no existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log('ups algo paso');
    }
});
exports.updateProduct = updateProduct;
