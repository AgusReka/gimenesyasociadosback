"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNoticia = exports.getNoticias = exports.deleteNoticia = exports.createNoticia = void 0;
var _Noticia = _interopRequireDefault(require("../modelos/Noticia"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getNoticias = async (req, res) => {
  const noticias = await _Noticia.default.find();
  res.json(noticias);
};
exports.getNoticias = getNoticias;

const getNoticia = async (req, res) => {
  if (req.params.id.length < 24) {
    return res.status(400).json({
      error: "Id invalido"
    });
  }
  const noticia = await _Noticia.default.findById(req.params.id);
  if (!noticia) {
    return res.status(400).json({
      error: "No se encontro la noticia"
    });
  }
  res.json(noticia);
};
exports.getNoticia = getNoticia;

const updateNoticia = async (req, res) => {
  const noticiaUpdated = await _Noticia.default.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(noticiaUpdated);
};
exports.updateNoticia = updateNoticia;

const deleteNoticia = async (req, res) => {
  const noticiaDeleted = await _Noticia.default.findByIdAndDelete(req.params.id);
  res.status(204).json(noticiaDeleted);
};
exports.deleteNoticia = deleteNoticia;

const createNoticia = async (req, res) => {
  console.log(req.body);
  const {
    titulo,
    subtitulo,
    descripcion,
    categoria,
    imagen,
    fecha
  } = req.body;
  if (!titulo || !subtitulo || !categoria || !imagen || !fecha) return res.status(400).json({
    error: "Todos los parametros deben estar completos"
  });
  const newNoticias = new _Noticia.default({
    titulo,
    subtitulo,
    descripcion,
    categoria,
    imagen,
    fecha
  });
  const saved = await newNoticias.save();
  res.status(201).json(saved);
};
exports.createNoticia = createNoticia;