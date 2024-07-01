import boom from '@hapi/boom'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserEntity } from '../entities/User.entity'
import { connectDB } from '../db';

const userSource = connectDB.getRepository(UserEntity);

const jwtSecret = 'elpepe'

export const getUserAuth = async (email: string, password: string) => {
  const user =  await userSource.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw boom.unauthorized();
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw boom.unauthorized();;
  }

  return user;
}

export const signToken = (user: UserEntity) => {
  const payload = {
    sub: user.id,
    role: user.role
  }
  const access_token = jwt.sign(payload, jwtSecret);
  
  return {
    user,
    access_token
  };
}

export const login = async (_, {email, password}, context) => {
  const { user } = await context.authenticate('graphql-local', { email, password })
  const { access_token } = signToken(user);

  return {
    access_token,
    user
  }
}
