import {Router} from 'express';
import * as authCtrl from '../controllers/auth.controller'
import { verifySignUp } from '../middlewares';

const router = Router()

router.post('/signup', [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
    ],
     authCtrl.signUp
    )
router.post('/signin',[verifySignUp.checkDuplicateUsernameOrEmail], authCtrl.signin)

export default router;