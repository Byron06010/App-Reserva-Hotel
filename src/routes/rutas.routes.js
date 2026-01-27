const {Router}=require("express")
const router=Router()

const {
    renderpag, rendertrab
}=require("../controllers/rutas.controllers")


// obtener las notas

router.get("paginas/principal",renderpag)
router.get("paginas/trabajador",rendertrab)
router.get("paginas/sales",rendertrab)
router.get("paginas/perfil",rendertrab)


module.exports=router