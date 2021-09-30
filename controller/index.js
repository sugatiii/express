import product from "../models/data.js";
import express from 'express';
import expressLayouts from 'express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs');

app.use(expressLayouts);

 

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
    try {
        res.json(req.body)
        await product.create(req.body);
        res.redirect('/product')
    } catch (error) {
        console.log(error)
    }
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