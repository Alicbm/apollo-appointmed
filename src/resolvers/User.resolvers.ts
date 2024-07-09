import bcrypt from 'bcrypt'
import { CreateUserRequest, findOne, UpdateUserRequest } from "../../types";
import { UserEntity } from "../entities/User.entity";
import { connectDB } from "../db";
import { signToken } from './Auth.resolvers';

const userSource = connectDB.getRepository(UserEntity);

export const getAllUsersRequest = async () => {
  return await userSource.find();
};

export const getOneUserRequest = async (_, { id }: findOne) => {
  return await userSource.findOne({
    where: {
      id,
    },
  });
};

export const createUsersRequest = async (_, { dto }: CreateUserRequest) => {
  const hash = await bcrypt.hash(dto.password, 10);
  
  const data = await userSource.insert({
    ...dto,
    password: hash
  });
  
  const user = {
    id: data.identifiers[0].id,
    ...dto
  }

  const { access_token } = signToken(user);

  return {
    user,
    access_token
  };
};

export const updateUsersRequest = async (_, { id, dto }: UpdateUserRequest) => {
  let findRequest = await userSource.findOne({ where: { id } });
  const hash = await bcrypt.hash(dto.password, 10);

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    if(dto?.password) {
      findRequest = {
        ...findRequest,
        ...dto,
        password: hash
      }      
    } else {
      findRequest = {
        ...findRequest,
        ...dto,
      };
    }

    await userSource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteUsersRequest = async (_, { id }: findOne) => {
  await userSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
