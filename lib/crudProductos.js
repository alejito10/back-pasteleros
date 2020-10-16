const mongoose = require('mongoose');
const Productos = require('../models/Productos');

const createNewProducto = async (req,res)=>{

    const newProducto = new Productos({
        name:req.body.name,
        tipo:req.body.tipo,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        fichaTecnica:req.body.fichaTecnica,
        foto:req.body.foto,
    });

    console.log("nuevo producto:"+newProducto.name);
    return await newProducto.save();
};

module.exports = {
    createNewProducto,
}