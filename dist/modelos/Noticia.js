"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
const NoticiaSchema = new _mongoose.Schema({
  titulo: String,
  subtitulo: String,
  descripcion: String,
  categoria: String,
  imagen: String,
  fecha: Date
}, {
  timestamps: false,
  versionKey: false
});
var _default = (0, _mongoose.model)("Noticia", NoticiaSchema); //url titulo subtitulo descripcion
exports.default = _default;