"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.crearUsuario = void 0;
var _Usuario = _interopRequireDefault(require("../modelos/Usuario"));
var _config = _interopRequireDefault(require("../config"));
var _jsonwebtoken = require("jsonwebtoken");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const crearUsuario = async (req, res) => {
  const {
    email,
    password,
    rol
  } = req.body;
  if (!email || !password || !rol) return res.status(400).json({
    message: "Empty fields are not allowed"
  });
  const usuarioFound = await _Usuario.default.findOne({
    email: email
  });
  if (usuarioFound) return res.status(400).json({
    message: "User already exists"
  });
  const newUsuario = new _Usuario.default({
    email,
    password: await _Usuario.default.encryptPassword(password),
    rol
  });
  const saved = await newUsuario.save();
  console.log(saved);
  const token = (0, _jsonwebtoken.sign)({
    id: saved._id
  }, _config.default.SECRET, {
    expiresIn: 86400 // 24 hours
  });

  res.status(200).json({
    token
  });
};
exports.crearUsuario = crearUsuario;
const signIn = async (req, res) => {
  const usuarioFound = await _Usuario.default.findOne({
    email: req.body.email
  });
  if (!usuarioFound) return res.status(400).json({
    message: "User not found"
  });
  const matchPassword = await _Usuario.default.comparePassword(req.body.password, usuarioFound.password);
  if (!matchPassword) return res.status(401).json({
    token: null,
    message: "Invalid Password"
  });
  const token = (0, _jsonwebtoken.sign)({
    id: usuarioFound._id
  }, _config.default.SECRET, {
    expiresIn: 86400 // 24 hours
  });

  res.json({
    token
  });
};
exports.signIn = signIn;