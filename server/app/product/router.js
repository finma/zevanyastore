import { Router } from "express";
import multer from "multer";
import os from "os";
import { index, viewCreate, actionCreate } from "./controller";

const router = Router();

router.get("/", index);
router.get("/create", viewCreate);
router.post(
  "/create",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreate
);

export default router;
