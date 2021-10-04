import express from "express";
import db from "./config/database.js"
import product from "./route/index.js"
import home from "./route/home.js"
import expressLayouts from "express-ejs-layouts"
import {body,check} from "express-validator";
import session from "express-session";
import cookieParser from "cookie-parser";
const app = express();
const port = 5000;

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

  //config cookie
app.use(cookieParser('secret'));





app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded());

try {
    await db.authenticate();
    console.log('database is connected');
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use('/product',product);
app.use('/form-tambah', home);
app.listen(port,()=>{
    console.log('server is running on hhtp://localhost:5000');
})