const { Router } = require("express");
const router = Router();
const registerController =
  require("../controllers/register").registerController;
const loginController = require("../controllers/login").loginController;
const verifyUser = require("../middlewares/verifyUser").verifyUser;
const getUser = require("../controllers/user").getUser;
const updateUser = require("../controllers/user").updateUser;

router.route("/register").post(registerController);
router.route("authenticate").post((req, res) => res.end());
router.route("/login").post(verifyUser, loginController);

router.route("/user/:username").get(getUser);

router.route("/updateuser/:userID").put(updateUser);

module.exports = router;
