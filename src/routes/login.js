import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(400).json(info);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return res.status(400).json(error);
        let expiry = Math.floor(Date.now()) + 60 * 60 * 24 * 1000;
        const token = jwt.sign(
          {
            exp: expiry,
            data: user.phone,
          },
          process.env.SECRETORKEY
        );
        return res.json({
          reset_password: 0,
          access_token: token,
          expires_in: "24h",
        });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default loginRouter;
