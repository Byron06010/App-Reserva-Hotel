
//cliente
const userscontr2= {}
const passport2 = require("passport")

const User1 = require("../models/User2")


userscontr2.renderSignUpForm1 = (req, res) => {
    res.render("users/signup3")
}
userscontr2.signup1 = async (req, res) => {
    const errors = [];
    const { perfil2,name2, email2, password2, confirm_password2 } = req.body
    if (perfil2 > 2){
        errors.push({text:"No puede escoger este perfil"})
    }
    if (password2 != confirm_password2) {
        errors.push({ text: "password do not match" })
    }
    if (password2.length < 4) {
        errors.push({ text: "password must be at least 4 charaster" })
    }
    if (errors.length > 0) {
        res.render("users/signup3", {
            errors,
            perfil2,
            name2,
            email2,
            password2,
            confirm_password2
        })
    } else {
        const emailUser = await User1.findOne({ email2 });
        if (emailUser) {
            req.flash("error_msg", "correo en uso")
            res.redirect("/users/signup3")
        } else {
            const newUser = new User1({ perfil2,name2, email2, password2 })
            newUser.password2 = await newUser.encryptpassword2(password2)
            await newUser.save()
            console.log(newUser)
            req.flash("success_msg", "you are registered")
            res.redirect("/users/signin3")
        }
    }
}

userscontr2.renderSigninForm1 = (req, res) => {
    res.render("users/signin3")
}
userscontr2.signin1 = passport2.authenticate("local",{
    failureRedirect:"/users/signin3",
    successRedirect:"/notes",
    failureFlash: true
})



userscontr2.logout2 = (req, res) => {
    req.logout()
    req.flash("success_msg","You are logged out now")
    res.redirect("/users/signin3")
}
//trabajador

module.exports = userscontr2;