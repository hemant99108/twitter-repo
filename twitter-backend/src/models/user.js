import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,       
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true});


userSchema.pre('save',function(next){
    const user=this;
    const SALT=bcrypt.genSalt(9);
    const encryptedPassword=bcrypt.hashSync(user.password,SALT);
    user.password=encryptedPassword;
    next();
})


userSchema.methods.comparePassword=async function(password){
    const user=this;
    return bcrypt.compareSync(password,user.password);
}

userSchema.methods.genJwt=function generateJwt(){
    return jwt.sign({id:this._id,email:this.email},'twitter_secret',{expiresIn:'1h'});
}


const User=mongoose.model('User',userSchema);

export default User;