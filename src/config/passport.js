const passport=require("passport")
const LocalStrategy= require("passport-local").Strategy

const User=require("../models/User")


passport.use(new LocalStrategy({
    perfilField:"perfil1",
    usernameField:"email1",
    passwordField:"password1"
}, async (email1,password1,done)=>{

    const user = await User.findOne({email1,perfil1:1})
    if (!user) {
        return done(null,false,{message:"Not User Found"})
    } else{
        const match=await user.matchpassword(password1)
        if (match){
            return done(null,user)
        }else{
            return done(null,false,{message:"Incorrect Password"})
        }
    }
   
}))
passport.serializeUser((user,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })
})
