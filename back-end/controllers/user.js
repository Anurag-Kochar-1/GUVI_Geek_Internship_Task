const User = require("../models/user").User;

exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      res.json(user);
    } else if (!user) {
      return res.status(501).send({ error: "Couldn't Find the User" });
    }
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
};
