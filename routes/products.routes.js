import {Router} from 'express';
import {createProduct,deleteProductById,getProductById,getProducts,updateProductById}  from '../controllers/products.controller'

const router = Router()

router.post('/', createProduct )
router.get('/', getProducts )
router.get('/:productId', getProductById )
router.put('/:productId', updateProductById )
router.delete('/:productId', deleteProductById )

export default router;