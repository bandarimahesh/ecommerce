const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

router.post("/register", async (req, res) => {
  try {
    const saltRound = 10;
    const saltRounds = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.status(200).send("Data send to the server");
    console.log(user);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    !user && res.status(404).send("No user found with this email");

    const validPassword = bcrypt.compare(req.body.password, user.password);

    !validPassword && res.status(404).send("Invalid password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).send({...others, accessToken});

  } catch (error) {

    res.status(500).send(error.message);
    console.log(error.message);
    
  }
});

module.exports = router;
