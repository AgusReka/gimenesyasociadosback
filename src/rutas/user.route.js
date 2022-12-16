import {Router} from "express";
import * as usuarioCtrl from "../controladores/usuario.controller";

const router = Router();

router.post("/signup", usuarioCtrl.crearUsuario);
router.post("/signin", usuarioCtrl.signIn);

export default router;