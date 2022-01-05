import { Router } from "express";
import { getProducts, getDetailProduct } from "./controller";

const router = Router();

router.get("/", getProducts);
router.get("/detail/:id", getDetailProduct);

export default router;
