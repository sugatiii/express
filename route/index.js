import express from "express";
import {getAllproduct,
createProduct,
getProductbyId,
updateProduct,
deleteProduct
} from "../controller/index.js"
const router = express.Router();

router.delete('/:id',deleteProduct);
router.get('/',getAllproduct);
router.get('/:id',getProductbyId);
router.post('/',createProduct);
router.patch('/:id',updateProduct);



export default router;