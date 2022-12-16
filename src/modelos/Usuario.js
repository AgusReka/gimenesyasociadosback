import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const UsuarioSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        rol: {type: String, default: 'user'}
    }, {
        timestamps: false,
        versionKey: false
    }
);
UsuarioSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UsuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

export default model("Usuario", UsuarioSchema);