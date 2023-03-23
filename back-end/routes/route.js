const { Router } = require("express");
const router = Router();

router.route("/register").get((req, res) => {
  res.json("REGISTER ROUTE");
});

router.route("authenticate").post();
router.route("/login").post();

router.route("/user/:username").get();

router.route("/updateuser").put();

module.exports = router;
