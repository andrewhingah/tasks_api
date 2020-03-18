const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const api = express.Router();

api.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(400).json(info);
      }
      req.login(user, { session: false }, async error => {
        if (error) return res.status(400).json(error);
        let expiry = Math.floor(Date.now()) + 60 * 60 * 24 * 1000;
        const token = jwt.sign(
          {
            exp: expiry,
            data: user.phone
          },
          process.env.SECRETORKEY
        );
        return res.json({
          reset_password: 0,
          access_token: token,
          expires_in: "24h"
        });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = api;
