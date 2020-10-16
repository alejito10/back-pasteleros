const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        tipo:{type:String, required: true},
        descripcion:{type:String, required:true},
        precio:{type:Number, required:true},
        fichaTecnica:{type:String, required:true},
        foto:{type:String}
    }
);

const productos = mongoose.model("productos", ProductosSchema);
module.exports = productos;