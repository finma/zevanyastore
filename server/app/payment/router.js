import { Router } from "express";
import { index, viewCreate, actionCreate } from "./controller";

const router = Router();

router.get("/", index);
router.get("/create", viewCreate);
router.post("/create", actionCreate);

export default router;
