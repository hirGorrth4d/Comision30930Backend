"use strict";

var _server = _interopRequireDefault(require("./services/server"));

var _apiSQL = require("../src/api/apiSQL");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_apiSQL.DBService.init(); //import {initMongoDB} from './services/database';
// const init = async () => {
//   await initMongoDB();
// }
// init();


var puerto = 8080;

_server["default"].listen(puerto, function () {
  return console.log("SERVER UP ON PORT ".concat(puerto));
}); //cuando use mongo, estas dos lineas van dentro de init()