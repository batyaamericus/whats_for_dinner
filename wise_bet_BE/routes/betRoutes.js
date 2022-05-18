import { Router } from "express";
import {top10Control} from '../controllers/betController.js'


const router = Router();

router.get('/top10', top10Control)
router.post('/search',)

export default router