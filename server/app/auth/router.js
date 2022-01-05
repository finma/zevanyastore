import { Router } from "express";
import { signup, signin } from "./controller";
import multer from "multer";
import os from "os";

const router = Router();

router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signup);
router.post("/signin", signin);

export default router;
