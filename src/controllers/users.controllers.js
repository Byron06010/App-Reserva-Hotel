const userscontr = {}
const passport = require("passport")

const User = require("../models/User")


userscontr.renderSignUpForm = (req, res) => {
    res.render("users/signup")
}
userscontr.signup = async (req, res) => {
    const errors = [];
    const { name1, email1, password1, confirm_password1 } = req.body
    if (password1 != confirm_password1) {
        errors.push({ text: "password do not match" })
    }
    if (password1.length < 4) {
        errors.push({ text: "password must be at least 4 charaster" })
    }
    if (errors.length > 0) {
        res.render("users/signup", {
            errors,
            name1,
            email1,
            password1,
            confirm_password1
        })
    } else {
        const emailUser = await User.findOne({ email1: email1 });
        if (emailUser) {
            req.flash("error_msg", "correo en uso")
            res.redirect("/users/signup")
        } else {
            const newUser = new User({name1, email1, password1 })
            newUser.password1 = await newUser.encryptpassword(password1)
            await newUser.save()
            req.flash("success_msg", "you are registered")
            res.redirect("/users/signin")
        }
    }
}

userscontr.renderSigninForm = (req, res) => {
    res.render("users/signin")
}
userscontr.signin = passport.authenticate("local",{
    failureRedirect:"/users/signin",
    successRedirect:"/paginas/trabajador",
    failureFlash: true
})


userscontr.logout = (req, res) => {
    req.logout()
    req.flash("success_msg","You are logged out now")
    res.redirect("/users/signin")
}

module.exports = userscontr;