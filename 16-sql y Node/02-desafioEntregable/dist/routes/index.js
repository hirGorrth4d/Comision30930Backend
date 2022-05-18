"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("./productos"));

var _mensajes = _interopRequireDefault(require("./mensajes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/productos', _productos["default"]);
router.use('/mensajes', _mensajes["default"]);
var _default = router;
exports["default"] = _default;