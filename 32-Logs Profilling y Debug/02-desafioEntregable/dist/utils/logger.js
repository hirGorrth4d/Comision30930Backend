"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _winston = _interopRequireDefault(require("winston"));

var logConfig = {
  level: 'info',
  transports: [new _winston["default"].transports.Console({
    level: 'info'
  }), new _winston["default"].transports.File({
    filename: './logs/warnings.log',
    level: 'warn'
  }), new _winston["default"].transports.File({
    filename: './logs/errors.log',
    level: 'error'
  })]
};

var logger = _winston["default"].createLogger(logConfig);

exports.logger = logger;