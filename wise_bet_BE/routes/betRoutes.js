import { Router } from "express";
import Validation from "../midlewares/Validator.js";
import { top10Control, searchByQuary } from "../controllers/betController.js";
import { searchSchema } from "../data/schemas.js";
import verifyToken from "../midlewares/verifyToken.js";

const router = Router();

router.get("/top10", top10Control);
router.get(
  "/search",
  // Validation(searchSchema),
  searchByQuary
);
//verifyToken,

export default router;
