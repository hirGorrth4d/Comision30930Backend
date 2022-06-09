"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products");

var router = (0, _express.Router)();
router.get('/', _products.getAllProducts);
router.get('/:id', _products.getProductById);
router.post('/', _products.checkBodyProduct, _products.createProduct);
router.put('/:id', _products.checkBodyProduct, _products.updateProduct);
router["delete"]('/:id', _products.deleteProduct);
var _default = router;
exports["default"] = _default;