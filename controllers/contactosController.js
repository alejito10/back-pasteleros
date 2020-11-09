const nodemailer = require("nodemailer");

const sendEmail = async (req, res) =>{
    const transporter = await nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: "liliane36@ethereal.email",
				pass: "zQjhyhXcgwbQFRynCE",
            },
        
	});
    const mailOptions = {
	    from: req.body.email,
	    to: "alejandre.gp@hotmail.com",
	    subject: "prueba de envio",
	    text: req.body.message,
        } 

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
			res.send(500, err.message);
        }else{
            console.log("Email sent");
			res.status(200).jsonp(req.body);
        }
    })
    transporter.close();
};
module.exports = {
	sendEmail,
};