import Noticia from "../modelos/Noticia";

export const getNoticias = async (req, res) => {
    const noticias = await Noticia.find();
    res.json(noticias);
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
        description,
        image,
        fecha
    } = req.body;
    if (!titulo || !subtitulo || !description || !image || !fecha) return res.status(400).json({
        error: "All parameters must be populated."
    })

    const newNoticias = new Noticia({
        titulo,
        subtitulo,
        description,
        image,
        fecha
    });
    const saved = await newNoticias.save();
    res.status(201).json(saved);
}