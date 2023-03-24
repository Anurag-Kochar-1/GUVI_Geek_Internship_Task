const User = require("../models/user").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    bcrypt
      .compare(password, user.password)
      .then((passwordCheck) => {
        if (!passwordCheck) {
          return res.status(404).send({ error: "Don't have password" });
        }

        const token = jwt.sign(
          {
            userID: user._id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );

        return res.status(200).send({
          message: "Login Successfull",
          username: user.username,
          email: user.email,
          _id: user._id,
          age: user.age,
          gender: user.age,
          dob: user.age,
          mobile: user.mobile,
          profilePicture: user.profilePicture,
          token,
        });
      })
      .catch((error) => {
        return res.status(404).send({ error: "Password does not match" });
      });
  } catch (error) {
    return res.status(500).send({ hello1: error });
  }
};
