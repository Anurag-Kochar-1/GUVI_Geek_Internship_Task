const { Router } = require("express");
const router = Router();
const registerController = require("../controllers/register");
const loginController = require("../controllers/loginController");

router.route("/register").get(registerController);

router.route("authenticate").post();
router.route("/login").post(loginController);

router.route("/user/:username").get();

router.route("/updateuser").put();

module.exports = router;
