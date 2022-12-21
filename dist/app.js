"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _package = _interopRequireDefault(require("../package.json"));
var _noticias = _interopRequireDefault(require("./rutas/noticias.route"));
var _user = _interopRequireDefault(require("./rutas/user.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
var bodyParser = require("body-parser");
app.set("pkg", _package.default);
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json({limit: '50mb'}));
app.use("/noticias", _noticias.default);
app.use("/usuarios", _user.default);
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
var _default = app;
exports.default = _default;