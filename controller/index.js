import product from "../models/data.js";
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import {body,check, validationResult} from "express-validator";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";


const app = express();
app.set('view engine', 'ejs');

app.use(expressLayouts);
//middle ware config session
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

 

export const getAllproduct = async (req,res)=>{
try {
    const products = await product.findAll();
    res.json(products)
    // res.render('index',{
    //     title : "home",
    //     layout : "layouts/main-layout",
    //     products,
    // })
} catch (error) {
    console.log(error)
}
}

export const createProduct = async (req,res)=>{
    const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //     res.render('form',{
    //         title : "form-tambah",
    //         layout : "layouts/main-layout",
    //         errors : errors.array()
    //     })
    // }else{
    //     try {
    //         // res.json(req.body)
    //         await product.create(req.body);
    //         res.redirect('/product')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}

export const getProductbyId = async (req,res)=>{
    try {
        const Produk = await product.findAll({
            where : {
                id : req.params.id
            }
        })
        res.json(Produk[0])

    } catch (error) {
        console.log(error)
    }
    }
    
export const updateProduct = async (req,res)=>{
    try {
        await product.update(req.body,{
            where : {
                id :req.params.id
            }
        })
        res.json({
            "message" : "product updated"
        }) 
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        await product.destroy({
            where : {
                id :req.params.id
            }
        })
        res.redirect('/product')
    } catch (error) {
        console.log(error)
    }
}