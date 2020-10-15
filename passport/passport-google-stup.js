var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;


passport.use(new GoogleStrategy({
        consumerKey: process.env.GOOGLE_CONSUMER_KEY,
        consumerSecret: process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: "http://localhost:3000/home"
    },
    function(token, tokenSecret, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));