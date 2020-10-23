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

//buscar un producto por su nombre
const findOneProducto = async (req,res,err) =>{
    try{
        if(!req.query.hasOwnProperty('name')||req.query.name == ""){
            res.status(200).json({status:400,message:"falta en el query name", data:[]});
        }
        const producto = await crud.findOneProducto(req.query.name);
        if(Object.keys(producto).length==0) res.status(200).json({status:404,message:"NOT FOUND name",data:[]});

        console.log(producto);
        res.status(200).json({status:200,message:"leido correctamente",data:producto});
    }
    catch(err){
        res.status(404).json({status:404,message:err.message,data:producto});
    }
};

//
const findAllProductos = async(req,res)=>{
    try{
        const productos = await crud.findAllProductos(req,res);
        if(Object.keys(productos).length==0) res.status(200).json({status:404, message:"no existen productos",data:[]});
        res.status(200).json({status:200,message:"leido correctamente", data:productos});
    }
    catch(err){
        res.status(403).json({status:403,message:err.message,data:[]});
    }
};


const updateOneProducto = async (req, res, next) => {
	try {
		const producto = await crud.updateOneProducto(req);
		if (Object.keys(producto).length == 0)
			res
				.status(200)
				.json({ status: 404, message: "NOT FOUND name", data: [] });
		res
			.status(200)
			.json({ status: 200, message: "modificado correctamente", data: producto });
	} catch (err) {
		res.status(401).json({ status: 401, message: err.message, data: [] });
	}
};

const deleteOneProducto = async (req,res) => {
    try{
           const deleter = await crud.deleteOneProducto(req);
           console.log(deleter.deletedCount);
           if(deleter.deletedCount==0){
               res.status(400).json({status:400,message:"no ha borrado nada"});
           } else{
                res.status(200).json({status:200,message:"todo bien"})
           }
    }catch (err){
        res.status(400);
    }

};


module.exports = {
    newProducto,
    findOneProducto,
    findAllProductos,
    updateOneProducto,
    deleteOneProducto
};