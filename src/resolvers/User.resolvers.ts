import bcrypt from 'bcrypt'
import { CreateUserRequest, findOne, UpdateUserRequest } from "../../types";
import { UserEntity } from "../entities/User.entity";
import { connectDB } from "../db";

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

  return {
    id: data.identifiers[0].id,
    ...dto
  };
};

export const updateUsersRequest = async (_, { id, dto }: UpdateUserRequest) => {
  let findRequest = await userSource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await userSource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteUsersRequest = async (_, { id }: findOne) => {
  await userSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
