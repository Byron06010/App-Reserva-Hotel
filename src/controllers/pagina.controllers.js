const paginacontr={};

paginacontr.renderprice=(req,res)=>{
    res.render("paginas/precios")
}
paginacontr.renderhome=(req,res)=>{
    res.render("paginas/principal")
}
paginacontr.renderpago=(req,res)=>{
    res.render("paginas/terminosdeuso")
}
paginacontr.rendertrabajador=(req,res)=>{
    res.render("paginas/trabajador")
}
paginacontr.rendersales=(req,res)=>{
    res.render("paginas/sales")
}
paginacontr.renderperfil=(req,res)=>{
    res.render("paginas/perfil")
}

module.exports=paginacontr