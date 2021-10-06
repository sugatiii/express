import express from "express";
import {getAllproduct,
createProduct,
getProductbyId,
updateProduct,
deleteProduct
} from "../controller/index.js"

import {cari} from "../config/config.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import {body,check} from "express-validator";
import product from "../models/data.js"
// import { Sequelize } from "sequelize";

const app = express();
const router = express.Router();

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 6000 },
    })
  );
  //config flash
app.use(flash());
  //config cookie
app.use(cookieParser('secret'));


router.delete('/:id',deleteProduct);
router.get('/',getAllproduct);
router.get('/:id',getProductbyId);
router.post('/',[
    body('nama_barang').custom((value)=>{
    const a = (req,res)=>{
      await product.findAll({
        where :{
          nama_barang : req.body.nama_barang
        }
      })
    }
    console.log(a);
    // if(duplikat){
    //   throw new Error('nama sudah ada');
    // }
    // return true
    })
],createProduct);
router.patch('/:id',updateProduct);



export default router;