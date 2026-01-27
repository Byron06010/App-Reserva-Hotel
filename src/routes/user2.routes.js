const { Router } = require("express")
const router = Router();

const { logout2, renderSignUpForm1, signup1, renderSigninForm1, signin1 } = require("../controllers/users2.controllers")
router.get("/users/signup3", renderSignUpForm1)

router.post("/users/signup3", signup1)

router.get("/users/signin3", renderSigninForm1)

router.post("/users/signin3", signin1)

router.get("/users/logout2", logout2)

module.exports = router;