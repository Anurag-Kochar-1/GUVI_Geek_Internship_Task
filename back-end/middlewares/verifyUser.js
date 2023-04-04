const User = require("../models/user").User;

exports.verifyUser = async (req, res, next) => {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;

    let exist = await User.findOne({ email });
    if (!exist) return res.status(404).send({ error: "Can't find User!" });
    next();
  } catch (error) {
    return res
      .status(404)
      .send({ error: "Authentication Error from verifyUser.js" });
  }
};
