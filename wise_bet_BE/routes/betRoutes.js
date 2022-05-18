import { Router } from "express";
import {top10Control, searchByQuary} from '../controllers/betController.js'


const router = Router();

router.get('/top10', top10Control)
router.post('/search/:query', searchByQuary)

export default router