const notescontr={};

notescontr.renderpag= async(req,res)=>{
    res.render("/paginas/principal")
}
notescontr.rendertrab= async(req,res)=>{
    res.render("/paginas/trabajador")
}
notescontr.rendertrab= async(req,res)=>{
    res.render("/paginas/sales")
}
notescontr.rendertrab= async(req,res)=>{
    res.render("/paginas/perfil")
}

module.exports=notescontr