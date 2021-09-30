import express from "express";
import {formTambah} from "../controller/home.js"
const router = express.Router();

router.get('/',formTambah);

export default router;
