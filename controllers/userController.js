const crud = require('../lib/crudUser');

const newUser = async (req, res) => {
    try{
        const newUser = await crud.createNewUser(req,res);
        console.log(newUser);
        //res.json(newUser);
        res.status(200).json({status:200,message:"Insertado correctamente",data:newUser});
    }
    catch(err){
        res.status(401).json({status:401,message:err.message,data:[]});
    }

};
const findOneUser = async (req,res,err) => { //lee filtrando email o name o el primero
    try{
        if(!req.query.hasOwnProperty('email') || req.query.email==""){
            res.status(200).json({status:400,message:"falta en el query email",data:[]});
        }
        const user = await crud.findOneUser(req.query.email);
        if(Object.keys(user).length == 0) res.status(200).json({status:404,message:"NOT FOUND email",data:[]});

        console.log(user);
        //res.json(newUser);
        res.status(200).json({status:200,message:"leido correctamente",data:user});
        //}
    }
    catch(err){   
        res.status(404).json({status:404,message:err.message,data:user});
    }

};
const updateOneUser = async(req,res,next)=>{
    try{
        const user=await crud.updateOneUser(req);
        if(Object.keys(user).length == 0) res.status(200).json({status:404,message:"NOT FOUND email",data:[]});
        res.status(200).json({status:200,message:"modificado correctamente",data:user});
    }
    catch(err){   
        res.status(401).json({status:401,message:err.message,data:[]});
    }

};

const addImgUser = async (req, res) => {

    await crud.addImgToUser(req.params.id, req.cloudinaryImgUrl);
    res.json({img: true});
};

module.exports = {
    newUser,
    findOneUser,
    updateOneUser,
    addImgUser
};