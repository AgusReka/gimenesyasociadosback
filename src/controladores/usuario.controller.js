import Usuario from "../modelos/Usuario";
import config from "../config";
import {sign} from "jsonwebtoken";

export const crearUsuario = async (req, res) => {
    const {email, password, rol} = req.body;

    const usuarioFound = await Usuario.findOne({email: email});
    if (usuarioFound) return res.status(400).json({message: "User already exists"});

    const newUsuario = new Usuario({
        email,
        password: await Usuario.encryptPassword(password),
        rol
    });

    const saved = await newUsuario.save();
    console.log(saved);

    const token = sign({id: saved._id}, config.SECRET, {
        expiresIn: 86400, // 24 hours
    });

    res.status(200).json({token});
};

export const signIn = async (req, res) => {

    const usuarioFound = await Usuario.findOne({email: req.body.email});

    if (!usuarioFound) return res.status(400).json({message: "User not found"});

    const matchPassword = await Usuario.comparePassword(req.body.password, usuarioFound.password);

    if (!matchPassword)
        return res.status(401).json({token: null, message: "Invalid Password"});

    const token = sign({id: usuarioFound._id}, config.SECRET, {
        expiresIn: 86400, // 24 hours
    });

    res.json({token});
};
