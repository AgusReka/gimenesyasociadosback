import express from "express";
import morgan from "morgan";
import cors from "cors";
import pkg from "../package.json"
import rutasNoticias from "./rutas/noticias.route";
import rutasUsuario from "./rutas/user.route"

const app = express();

app.set("pkg", pkg);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({limit: '50mb'}));
app.use("/noticias", rutasNoticias);
app.use("/usuarios", rutasUsuario);

app.get("/", (req, res) => {
    res.json({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version,
    });
})

export default app;