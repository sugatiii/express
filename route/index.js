import express from "express";
import {getAllproduct,
createProduct,
getProductbyId,
updateProduct,
deleteProduct
} from "../controller/index.js"
const router = express.Router();

router.get('/',getAllproduct);
router.get('/:id',getProductbyId);
router.post('/',createProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;