import passport from 'passport';

import { JwtStrategy } from './strategies/jwt.strategy';
import { GQLLocalStrategy } from './strategies/local-gql';

passport.use(JwtStrategy)
passport.use(GQLLocalStrategy)
