const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const User = require("../models/user");

// passport.serializeUser(function (user, done) {
//   done(null, user._id);
// });

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK,
      profileFields: ["email", "displayName"],
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const { name, email } = profile._json;
      User.findOne({ email }).then((user) => {
        if (user) {
          console.log("user is already exist");
          return cb(null, user);
        }
        new User({
          name,
          email,
        })
          .save()
          .then((newUser) => {
            console.log("New usr created.");
            cb(null, newUser);
          });
      });
    }
  )
);
