import { Router } from "express";
import Validation from "../../../pet-adoption-project/PET-ADOPTION-BE/middleware/Validator.js";
import {top10Control, searchByQuary} from '../controllers/betController.js'
import { searchSchema } from "../data/schemas.js";
import verifyToken from "../midlewares/verifyToken.js";


const router = Router();

router.get('/top10', verifyToken, top10Control)
router.post('/search/:query', verifyToken, Validation(searchSchema), searchByQuary)

export default router