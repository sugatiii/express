import express from "express";
import db from "./config/database.js"
import product from "./route/index.js"
import expressLayouts from "express-ejs-layouts"



const app = express();
const port = 5000;
app.set('view engine', 'ejs');
app.use(expressLayouts);

try {
    await db.authenticate();
    console.log('databade is connected');
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use('/product',product);
app.get('/form-tambah',(req,res)=>{
    res.render('form',{
        title : "fotm tambah",
        layout : "layouts/main-layout"
    })
})

app.listen(port,()=>{
    console.log('server is running on hhtp://localhost:5000');
})