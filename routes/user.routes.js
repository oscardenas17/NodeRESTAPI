import {Router} from 'express';
import { createUse } from "../controllers/user.controller";

import { authJwt, verifySignUp } from '../middlewares';


const router = Router()

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isAdmin,
    verifySignUp.checkRolesExisted
    ]
     ,createUse)

export default router;