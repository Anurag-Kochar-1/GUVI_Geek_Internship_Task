const User = require("../models/user").User;
const bcrypt = require("bcrypt");

exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        const user = new User({
          username,
          email,
          password: hashedPassword,
          age: 0,
          gender: "",
          dob: "",
          mobile: 0,
          profilePicture: "",
        });

        user
          .save()
          .then((result) => {
            res.status(201).send({ message: "User Registered Successfully" });
          })
          .catch((error) => {
            res.status(500).send({ "hello 1": "hello" });
          });
      })
      .catch((err) => {
        return res.status(500).send({
          error: "Enalbe to hashed password",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ "hello 3": error });
  }
};
