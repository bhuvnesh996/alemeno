import passport from "passport";
const JWT_SECRET = "rich";

import { ExtractJwt, Strategy } from "passport-jwt";
import User from "../models/user";


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOfKey: JWT_SECRET,
};

passport.use(
  new Strategy(jwtOptions, (jwtPayload, done) => {
    User.findById(jwtPayload._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

export default passport;
