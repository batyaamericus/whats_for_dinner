import { Router } from "express";
import Validation from "../midlewares/Validator.js";
import { top10Control, searchByQuary } from "../controllers/betController.js";
import { searchSchema } from "../data/schemas.js";
import verifyToken from "../midlewares/verifyToken.js";

const router = Router();

router.get("/top10", verifyToken, top10Control);
router.get(
  "/search/:key/:question",
  (req, res) => {
    res.send(req.query)
  }
  // // Validation(searchSchema),
  // verifyToken,
  // searchByQuary
);

export default router;
