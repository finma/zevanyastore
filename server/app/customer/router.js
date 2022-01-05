import { Router } from "express";
import { createTransaction } from "./controller";

const router = Router();

router.post("/transaction", createTransaction);

export default router;
