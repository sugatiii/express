import express from "express";
import db from "./config/database.js"
import product from "./route/index.js"
const app = express();
const port = 3000;

try {
    await db.authenticate();
    console.log('databade is connected');
} catch (error) {
    console.log(error)
}

app.use('/product',product);

app.listen(port,()=>{
    console.log('server is running on hhtp://localhost:3000');
})