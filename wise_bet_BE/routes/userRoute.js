import { Router } from "express";


const router = Router();

router.post('/test', (res,req) => console.log(req.body) )


export default router