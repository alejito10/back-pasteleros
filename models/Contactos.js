const mongoose = require("mongoose");

const ContactosSchema = new mongoose.Schema(
    {
	name: { type: String, required: true },
	email: { type: String, required: true },
	message:{type:String,required:true}
},
{timestamps:true},
);

const contactos = mongoose.model('contactos', ContactosSchema);
module.exports= contactos;