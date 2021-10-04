import product from "../models/data.js";



 export const cari = async (nama_barang)=>{
    const produk = await product.findAll({
        where:{
            nama_barang : nama_barang
        }
    })
    console.log(produk[0])
}
