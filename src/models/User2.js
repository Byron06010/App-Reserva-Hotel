const{Schema,model}=require("mongoose");

const bcrypt=require("bcryptjs");

const userschema=new Schema({
    perfil2:{type:Number,required:true},
    name2:{type:String,required:true},
    email2:{type:String,required:true,unique:true},
    password2:{type:String,required:true}
},{
   timestamps:true 
});

userschema.methods.encryptpassword2= async password2=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password2,salt);
};

userschema.methods.matchpassword2 =async function(password2) {
    return await bcrypt.compare(password2, this.password2)
}

module.exports=model("user2",userschema);