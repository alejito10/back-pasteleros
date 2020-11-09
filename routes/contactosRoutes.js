const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
const contactosController = require('../controllers/contactosController')



router.post('/send-email',(req,res)=>{
    const data = req.body;
    const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.PASS_EMAIL,
			},
		});
    const mailOptions = {
			from: "pasteleros.pruebas2020@gmail.com",
			to: "pasteleros.pruebas2020@gmail.com",
			subject: "prueba de envio",
			text: data.message,
			html: `<h1>Datos del contacto</h1>
			<ul>
				<li>${data.name}</li>
				<li>${data.email}</li>
				<li>${data.message}</li>
			</ul>
			`,
		};
    transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log('ERROR',error);
				res.send(500, err.message);
			} else {
				console.log("Email sent");
				res.status(200).jsonp(req.body);
            }
            
            transporter.close();
		});
		
})

module.exports = router;