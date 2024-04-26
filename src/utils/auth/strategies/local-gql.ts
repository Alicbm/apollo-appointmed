import { GraphQLLocalStrategy } from 'graphql-passport'
import { getUserAuth } from '../../../resolvers/Auth.resolvers';

export const GQLLocalStrategy = new GraphQLLocalStrategy (
  async (email: string, password: string, done) => {
    try {
      const user = await getUserAuth(email, password);

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);