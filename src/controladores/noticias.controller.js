import Noticia from "../modelos/Noticia";

export const getNoticias = async (req, res) => {
    const noticias = await Noticia.find();
    res.json(noticias);
}
export const getNoticia = async (req, res) => {
    if (req.params.id.length < 24) {
        return res.status(400).json({
          error: "Id invalido"
        });
      }
    const noticia = await Noticia.findById(req.params.id);
    if (!noticia) {
        return res.status(400).json({
          error: "No se encontro la noticia"
        });
      }
      res.json(noticia);
}
export const updateNoticia = async (req, res) => {
    const noticiaUpdated = await Noticia.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(noticiaUpdated);
}
export const deleteNoticia = async (req, res) => {
    const noticiaDeleted = await Noticia.findByIdAndDelete(req.params.id);
    res.status(204).json(noticiaDeleted);
}

export const createNoticia = async (req, res) => {
    console.log(req.body)
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

    const newNoticias = new Noticia({
        titulo,
        subtitulo,
        descripcion,
        categoria,
        imagen,
        fecha
    });
    const saved = await newNoticias.save();
    res.status(201).json(saved);
}