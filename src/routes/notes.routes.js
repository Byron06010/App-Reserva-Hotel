const {Router}=require("express")
const router=Router()

const {rendernoteform,
    createnownote, 
    rendernotes,
    rendernotes2,
    rendereditnotes,
    updatenotes,
    deletenotes
}=require("../controllers/notes.controllers")

const {isAuthenticated}=require("../helpers/auth")

router.get("/notes/add",isAuthenticated,rendernoteform)

router.post("/notes/new-note",createnownote)

// obtener las notas

router.get("/notes",isAuthenticated,rendernotes)
router.get("/notes2",isAuthenticated,rendernotes2)


//edit notas
router.get("/notes/edit/:id",isAuthenticated,rendereditnotes)
router.put("/notes/edit/:id",isAuthenticated,updatenotes)

//delete notes

router.delete("/notes/delete/:id",isAuthenticated,deletenotes)

module.exports=router