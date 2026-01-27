const{Schema,model}=require("mongoose");

const bcrypt=require("bcryptjs");

const userschema=new Schema({
    name1:{type:String,required:true},
    email1:{type:String,required:true,unique:true},
    password1:{type:String,required:true}
},{
   timestamps:true
});
//
userschema.methods.encryptpassword= async password1=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password1,salt);
};

userschema.methods.matchpassword =async function(password1) {
    return await bcrypt.compare(password1, this.password1)
}

module.exports=model("user",userschema);