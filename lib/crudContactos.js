const mongoose = require('mongoose');
const Contactos = require('../models/Contactos');


const createContacto = async(req,res)=>{
    const newContacto = new Contactos({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message
        });
    console.log('nuevo contacto con mensaje'+ newContacto.name);
    return await newContacto.save();
};



module.exports = {
	createContacto,
};