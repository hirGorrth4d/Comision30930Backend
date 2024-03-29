"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mensajes = require("../controllers/mensajes");

var router = (0, _express.Router)();
router.get('/', _mensajes.getAllMsg);
router.post('/', _mensajes.checkBodyMsg, _mensajes.sendMsg);
var _default = router;
exports["default"] = _default;