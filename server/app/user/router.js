import { Router } from "express";
import { index, actionSignin } from "./controller";

const router = Router();

router.get("/", index);
router.post("/", actionSignin);

export default router;
