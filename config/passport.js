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

passport.deserializeUser;
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
//local Strategy
passport.use(
  new LocalStrategy((req, email, password, done) => {
    User.findOne({ email })
      .then((user) => {
        if (!user)
          return done(null, false, req.flash("msg", "此 email 尚未註冊！"));
        bcrypt.compare(password, user.password, function (err, result) {
          if (!result)
            return done(
              null,
              false,
              req.flash("msg", "email 或密碼輸入錯誤，請再次確認！")
            );
          return done(null, user);
        });
      })
      .catch((err) => {
        done(err, false);
      });
  })
);
