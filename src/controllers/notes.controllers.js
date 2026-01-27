const notescontr={};
const bcrypt = require("bcryptjs/dist/bcrypt");
const async = require("hbs/lib/async");
const { findById } = require("../models/note");
const note=require("../models/note")

notescontr.rendernoteform=(req,res)=>{
    res.render("notes/new-note")
}
notescontr.createnownote=async(req,res)=>{
    const {nombre,rut,gmail,habitaciones,adultos,niños,desde,hasta,destino}=req.body
    const newnote= new note({nombre,rut,gmail,habitaciones,adultos,niños,desde,hasta,destino})
    newnote.user=req.user.id
    await newnote.save()
    req.flash("success_msg","Note Added Successfully")
    res.redirect("/notes")
}
notescontr.rendernotes= async(req,res)=>{
    const notes=await note.find({user: req.user.id}).lean();
    res.render("notes/all-notes",{notes})
    
    
}
notescontr.rendernotes2= async(req,res)=>{
    const notes=await note.find({user: req.user.id}).lean();
    res.render("notes/all-notes2",{notes})
    
    
}
notescontr.rendereditnotes=async(req,res)=>{
    const notes =await note.findById(req.params.id).lean();
    if(note.user != req.user.id){
        req.flash("error_msg","Not Authorized")
        return res.redirect("/notes")
    }
    res.render("notes/edit-notes",{notes})
    
}
notescontr.updatenotes=async(req,res)=>{
    const{producto,precio}=req.body;
    await note.findByIdAndUpdate(req.params.id,{producto,precio})
    req.flash("success_msg","Note Update Successfully")
    res.redirect("/notes")
}
notescontr.deletenotes= async(req,res)=>{
    await note.findByIdAndDelete(req.params.id)
    req.flash("success_msg","Note Delete Successfully")
    res.redirect("/notes")
}

module.exports=notescontr