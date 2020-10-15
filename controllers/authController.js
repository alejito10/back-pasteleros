const jwt = require('jsonwebtoken');

const crudUsers = require('../lib/crudUser');
const bcrypt = require('bcrypt');

const authUser = async (req, res, next) => {
    if(!req.query.hasOwnProperty('email') || Object.keys(req.query.email).length == 0  || req.query.email=="" ){
        res.status(200).json({status:400,message:"falta en el query email",data:[]});
    }
    if(!req.query.hasOwnProperty('password') || Object.keys(req.query.password).length == 0  || req.query.password=="" ){
        res.status(200).json({status:400,message:"falta en el query password",data:[]});
    }
    const thisUser = await crudUsers.findOneUser(req.query.email);

        if (thisUser.length>0 ) {
            bcrypt.compare(req.query.password, thisUser[0].password,(err,result)=>{
                if (!result){
                    res.status(200).json({status:401,message:"todo mal",data:[]});
                    console.log("holaaaaa")
                }else { 
                    next();
                }
            });
        }else {
            res.status(200).json({status:401,message:"todo mal",data:[]});
        }

};


const getToken = (req, res) => {

    jwt.sign({
        email: req.body.email,
        password: req.body.password

    }, process.env.SECRET, { expiresIn: '7200s' }, function (err, token) {
        if (err) throw err;
        res.status(200).json({status:200,message:"leido correctamente",token:token});
    });
};

const verifyToken = (req, res, next) => {

    if (req.headers.authorization) {
        req.token = req.headers.authorization.split(' ')[1];
        jwt.verify(req.token, process.env.SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(401);
            }
            else {
                next();
            }
        });
    }
    else {
        res.sendStatus(401);
    }
};

module.exports = {
    getToken,
    authUser,
    verifyToken
};

