import { Strategy, ExtractJwt } from 'passport-jwt';

const jwtSecret = 'elpepe'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
}

export const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
