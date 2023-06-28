const express = require("express");

const { generateToken, validateToken } = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");
const User = require("../models/users");
const router = express.Router();

/*
  ALL YOUR ROUTES HERE!
*/

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { userName, password } = req.body;

  User.findOne({ where: { userName } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        userName: user.userName,
        name: user.name,
        lastname: user.lastname,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/me", validateAuth, (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  res.send(user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
