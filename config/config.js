import product from "../models/data.js";



 export const cari = async (nama_barang)=>{
        return await product.findAll({
        where:{
            nama_barang : nama_barang
        }
    })
}

