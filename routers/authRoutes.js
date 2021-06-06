const {Router} = require("express");
const router = Router();
const auth = require("../controller/authController")

//login
router.post("/login",auth.login)

//signup
router.post("/signup",auth.signup)


module.exports=router;
