const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

FACEBOOK_APP_ID = "310387418131287";
FACEBOOK_APP_SECRET = "e77fa55e331cdd5e3651564d793fcaaf";

passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });