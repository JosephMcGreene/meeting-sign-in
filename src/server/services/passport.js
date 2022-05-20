const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

const googleOptions = {
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: "/auth/google/callback",
};

passport.use(
	new GoogleStrategy(
		googleOptions,
		(accessToken, refreshToken, profile, done) => {
			console.log("ACCESS TOKEN:", accessToken);
			console.log("REFRESH TOKEN:", refreshToken);
			console.log("PROFILE:", profile);
		}
	)
);
