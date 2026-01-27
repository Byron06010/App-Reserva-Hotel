const passport2=require("passport")
const User2 = require("../models/User2")
const LocalStrategy= require("passport-local").Strategy

const User=require("../models/User2")

passport2.use(new LocalStrategy({
    usernameField:"email2",
    passwordField:"password2"
}, async (email2,password2,done)=>{

    const user2 = await User.findOne({email2})
    if (!user2) {
        return done(null,false,{message:"Not User Found"})
    } else {
        const match=await user2.matchpassword2(password2)
        if (match){
            return done(null,user2)
        }else{
            return done(null,false,{message:"Incorrect Password"})
        }
    }
   
}))
passport2.serializeUser((user2,done)=>{
    done(null,user2.id)
})
passport2.deserializeUser((id,done)=>{
    User.findById(id,(err,user2)=>{
        done(err,user2)
    })
})
