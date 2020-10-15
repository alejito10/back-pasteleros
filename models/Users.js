const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,  //no hace falta
        name:{type: String,required: true},
        surname:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        password:{type:String,required:true},
        birthdate:{type:Date},
    },
    {timestamps: true}
);

UserSchema.pre('save', async function (next) {
    try {  //falta validar la fecha
        //this.password = await bcrypt.hash(this.password, 12);
       /* this.validate().catch(error => {
            assert.ok(error);
            assert.equal(error.errors['name'].message, 'nombre requerido');
            assert.equal(error.errors['email'].message, 'Email validation failed');
          });*/
          console.log('paso por el presave');
        next();
    } catch (err) {
       console.log(err);
       res.json(err);
        throw err;
    }

})

const  users = mongoose.model('users', UserSchema);
module.exports = users;