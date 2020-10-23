const mongoose = require('mongoose');
const Productos = require('../models/Productos');

const createNewProducto = async (req,res)=>{

    const newProducto = new Productos({
			name: req.body.name,
			tipo: req.body.tipo,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			fichaTecnica: req.body.fichaTecnica,
			foto: req.body.foto,
		});

    console.log("nuevo producto:"+newProducto.name);
    return await newProducto.save();
};


const findOneProducto = async (name) => {
	try{
		const filter={name:name};
		const producto = await Productos.find(filter).limit(1);
		return producto;
	}
	catch (err) {
		console.log(err);
		throw err;
	}
};

//mostrar todos los productos, luego se filtran en front
const findAllProductos = async(req,res)=>{
	const listaProductos = await Productos.find();
	return listaProductos;
};

const updateOneProducto = async (req) => {
	const name = req.body.name;
	const tipo = req.body.tipo;
	const descripcion = req.body.descripcion;
	const precio = req.body.precio;
	const fichaTecnica = req.body.fichaTecnica;
	const foto = req.body.foto;
	if (Object.keys(name).length == 0 || name == "") {
		throw new Error("no escribio en el body el name");
	}
	producto = await Productos.findOneAndUpdate(
		{ name: name },
		{ $set: { name: name, tipo: tipo, descripcion: descripcion, precio:precio, fichaTecnica:fichaTecnica, foto:foto } },
		{ new: true, timestamp: true, runValidators: true }
	);
	console.log("despues de modificar");
	console.log(producto);
	return producto;
};
const deleteOneProducto = async (req) => {
	const deleted = await Productos.deleteOne({ name: req.query.name});
		return deleted;
};


module.exports = {
	createNewProducto,
	findOneProducto,
	findAllProductos,
	updateOneProducto,
	deleteOneProducto

}