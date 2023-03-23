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

exports.updateUser = async (req, res) => {
  try {
    const { userID } = req.params;

    if (userID) {
      const body = req.body;
      const newUser = await User.updateOne({ _id: userID }, body);
      if (!newUser) {
        return res.status(401).send({ message: "Record Not Updated!" });
      } else {
        return res.status(201).send({ message: "Record Updated!" });
      }
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    return res.status(401).send({ error });
  }
};
