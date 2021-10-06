import product from "../models/data.js";
import express from 'express';
import expressLayouts from 'express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);

export const formTambah = (req,res)=>{
    res.render('form',{
        title : "form tambah",
        layout : "layouts/main-layout"
    })
}