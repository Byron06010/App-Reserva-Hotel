
const { Router } = require("express")
const routes=Router();

const {renderAbout,renderIndex}=require("../controllers/index.controllers")

routes.get("/",renderIndex)

routes.get("/about",renderAbout)

module.exports=routes