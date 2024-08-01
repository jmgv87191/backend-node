import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products";

const router: Router = Router();

router.get( '/',getProducts );
router.get( '/:id',getProduct );
router.delete( '/:id',deleteProduct );
router.post( '/',createProduct );
router.put( '/:id',updateProduct );

export default router;


