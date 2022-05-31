import {Router} from 'express';
import {createProduct,deleteProductById,getProductById,getProducts,updateProductById}  from '../controllers/products.controller'
import { authJwt } from "../middlewares";


const router = Router()

router.post('/',[authJwt.verifyToken, authJwt.isModerador], createProduct )
router.get('/', getProducts )
router.get('/:productId', getProductById )
router.put('/:productId',[authJwt.verifyToken, authJwt.isAdmin], updateProductById )
router.delete('/:productId',[authJwt.verifyToken, authJwt.isAdmin], deleteProductById )

export default router;