const { Router } = require("express");
const router = Router();
const registerController = require("../controllers/register").registerController;
const loginController = require("../controllers/login");

router.route("/register").post(registerController);

router.route("authenticate").post((req, res) => res.end());
router.route("/login").post(loginController);

router.route("/user/:username").get();

router.route("/updateuser").put();

module.exports = router;
