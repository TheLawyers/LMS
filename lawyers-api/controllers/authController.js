const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/users");
const auth = require("../middleware/auth");
router.get("/testauth", auth, (req, res) => {
  res.send("authenticated");
});

router.post("/auth", user.findEmail, user.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, name, id } = req.user;

    const token = jwt.sign({ email, name, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.post("/users", user.findEmail, user.create, (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {
    const { email, name, id } = req.user;

    // const email = req.user.email ;
    // const name = req.user.name ;

    const token = jwt.sign({ email, name, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

module.exports = router;