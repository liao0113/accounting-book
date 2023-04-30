const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user");

passport.serializeUser(function (user, done) {
  console.log("SErializing user now");
  done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
  console.log("Deserializing user now ");
  User.findById({ _id })
    .then((user) => {
      console.log("found user");
      done(null, user);
    })
    .catch((err) => done(err, null));
});

//local Strategy
//usernameField:"mail" 是把驗證從預設找username 更變成email

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log(email, password);
    User.findOne({ email })
      .then((user) => {
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) return done(null, false);
          if (!result) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        });
      })
      .catch((err) => done(null, false));
  })
);

//FacebookStrategy
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
