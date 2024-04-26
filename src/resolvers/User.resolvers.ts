import { CreateUserRequest, findOne, UpdateUserRequest } from "../../types";
import { UserEntity } from "../entities/User.entity";
import { connectDB } from "../db";

const userSource = connectDB.getRepository(UserEntity);

export const getAllUsers = async () => {
  return await userSource.find();
};

export const getOneUser = async (_, { id }: findOne) => {
  return await userSource.findOne({
    where: {
      id,
    },
  });
};

export const createUsers = async (_, { dto }: CreateUserRequest) => {
  const data = await userSource.insert(dto);

  return {
    id: data.identifiers[0].id,
    ...dto
  };
};

export const updateUsers = async (_, { id, dto }: UpdateUserRequest) => {
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

export const deleteUsers = async (_, { id }: findOne) => {
  await userSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
