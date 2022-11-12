const {Router} = require("express");
const router = Router();
const profile = require("../controller/userProfileController")


//All users 
router.patch("/basic/:id",profile.information)

router.patch("/user-status/:id",profile.userStatus)

router.patch("/description/:id",profile.description)

router.patch("/skills/:id",profile.skills)

router.patch("/education/:id",profile.education)


//Freelancers
router.post("/offer/:id",profile.offer)

//Freelance Hirer
router.post("/job/:id",profile.job)


module.exports=router;
