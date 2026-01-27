const indexcontr={};
indexcontr.renderIndex=(req,res)=>{
    res.render("index")
}

indexcontr.renderAbout=(req,res)=>{
    res.render("about")
}

module.exports=indexcontr;