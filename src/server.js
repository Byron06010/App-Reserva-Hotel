const express=require("express");
let  exphbs = require("express-handlebars");
const path=require("path");
const morgan=require("morgan")
const methodOverride = require('method-override')
const flash=require("connect-flash")
const session=require("express-session");
const passport=require("passport")
const passport2=require("passport")
//inicializacion
const app=express();
require("./config/passport")

//configuraciones

app.set("port",process.env.PORT || 4000)
app.set("views",path.join(__dirname,"views"));
app.engine(".hbs", exphbs.engine({
    layoutsDir:path.join(app.get("views"),"layouts"),
    partialsDir:path.join(app.get("views"),"partials"),
    extname:".hbs"
}));
app.set("view engine",".hbs");

//Funciones
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.use(session({
    secret:"secret",
    resave:"true",
    saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(passport2.initialize())
app.use(passport2.session())
app.use(flash());


//variables globales
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash("success_msg");
    res.locals.error_msg=req.flash("error_msg");
    res.locals.error=req.flash("error");
    res.locals.user=req.user || null;
    res.locals.user2=req.user || null;
    next();
});


//rutas

app.use(require("./routes/index.routes"));
app.use(require("./routes/rutas.routes"));
app.use(require("./routes/notes.routes"));
app.use(require("./routes/users.routes"));
app.use(require("./routes/user2.routes"));
app.use(require("./routes/paginas.routes"));
//estatic files

app.use(express.static(path.join(__dirname ,'public')));


module.exports=app;