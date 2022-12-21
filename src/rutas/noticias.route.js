import {Router} from "express";
import * as noticiasCtrl from "../controladores/noticias.controller";
import {verifyToken} from "../middleware/rolAuthenticator";

const router = Router();
router.get("/", noticiasCtrl.getNoticias);
router.get("/:id", noticiasCtrl.getNoticia);
router.post("/", verifyToken, noticiasCtrl.createNoticia);
router.delete("/:id", verifyToken, noticiasCtrl.deleteNoticia);
router.put("/:id", verifyToken, noticiasCtrl.updateNoticia);

export default router;