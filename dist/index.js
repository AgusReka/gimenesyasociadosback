"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_app.default.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001 atr.");
});