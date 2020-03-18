const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require("passport-local").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../database/models/index");

const comparePasswords = (hashedPassword, password) => {
  if (bcrypt.compareSync(password, hashedPassword)) {
    return true;
  } else {
    return false;
  }
};

passport.use(
  "login",
  new localStrategy(
    { usernameField: "phone", passwordField: "password" },
    async (phone, password, done) => {
      try {
        const user = await db.User.findOne({ where: { phone } });
        if (!user) {
          return done(null, false, {
            error: { message: "User not found" }
          });
        }
        console.log(">>>>>>>");
        const validate = await comparePasswords(user.password, password);
        if (!validate) {
          return done(null, false, {
            error: { password: "You have entered an incorrect password" }
          });
        }
        return done(null, user, { message: "Logged in successfully" });
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRETORKEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token);
      } catch (error) {
        done({
          error: { message: "Unauthorized" }
        });
      }
    }
  )
);

module.exports = passport;
