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
				user: "pasteleros.pruebas2020@gmail.com",
				pass: "Aa159753",
			},
		});
    const mailOptions = {
			from: "pasteleros.pruebas2020@gmail.com",
			to: "nataliiaa.87@gmail.com",
			subject: "prueba de envio",
			text: req.body.message,
			html: `<h1>holaa cara colaa</h1>`,
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