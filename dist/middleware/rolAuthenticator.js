"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;
var _Usuario = _interopRequireDefault(require("../modelos/Usuario"));
var _config = _interopRequireDefault(require("../config"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log("Token",token);
    if (!token) return res.status(404).json({
      message: "No token"
    });
    const decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);
    req.userId = decoded.id;
    const usuario = await _Usuario.default.findById(req.userId, {
      password: 0
    });
    if (!usuario) return res.status(404).json({
      message: "No user found"
    });
    if (usuario.rol !== "admin") return res.status(404).json({
      message: "Require admin role"
    });
    next();
  } catch (e) {
    return res.status(404).json({
      message: "Unauthorized"
    });
  }
};
exports.verifyToken = verifyToken;