const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique:true },
		tipo: { type: String, required: true },
		descripcion: { type: String, required: true },
		precio: { type: Number, required: true },
		fichaTecnica: { type: String, required: true },
		foto: { type: String },
	},
    { timestamps: true },
);
ProductosSchema.pre("save", async function (next) {
	try {
		console.log("paso por el presave");
		next();
	} catch (err) {
		console.log(err);
		res.json(err);
		throw err;
	}
});

const productos = mongoose.model("productos", ProductosSchema);
module.exports = productos;