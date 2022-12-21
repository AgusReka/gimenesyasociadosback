import {Schema, model} from "mongoose";

const NoticiaSchema = new Schema(
    {
        titulo: String,
        subtitulo: String,
        descripcion: String,
        categoria: String,
        imagen: String,
        fecha: String
    }, {
        timestamps: false,
        versionKey: false
    }
);

export default model("Noticia", NoticiaSchema);
//url titulo subtitulo descripcion