import {Schema, model} from "mongoose";

const NoticiaSchema = new Schema(
    {
        titulo: String,
        subtitulo: String,
        description: String,
        image: String,
        fecha: Date
    }, {
        timestamps: false,
        versionKey: false
    }
);

export default model("Noticia", NoticiaSchema);
//url titulo subtitulo descripcion