import {Router} from 'express';
import {createProduct,deleteProductById,getProductById,getProducts,updateProductById}  from '../controllers/products.controller'
import { verifyToken } from "../middlewares";


const router = Router()

router.post('/',verifyToken, createProduct )
router.get('/', getProducts )
router.get('/:productId', getProductById )
router.put('/:productId',verifyToken, updateProductById )
router.delete('/:productId',verifyToken, deleteProductById )

export default router;