const crud = require('../lib/crudProductos');

const newProducto = async (req, res) =>{
    try{
        const newProducto = await crud.createNewProducto(req, res);
        console.log(newProducto);

        res.status(200).json({status:200, message:"insertado correctamente", data:newProducto});
    }
    catch(err){
        res.status(401).json({status:401,message:err.message,data:[]});
    }
};

module.exports = {
    newProducto
};