import Usuario from "../modelos/Usuario";
import config from "../config";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        console.log(token);
        if (!token) return res.status(404).json({message: "No token"});
        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;
        const usuario = await Usuario.findById(req.userId, {password: 0});
        if (!usuario) return res.status(404).json({message: "No user found"});
        if (usuario.rol !== "admin") return res.status(404).json({message: "Require admin role"});
        next();
    } catch (e) {
        return res.status(404).json(
            {
                message: "Unauthorized"
            }
        )
    }
}