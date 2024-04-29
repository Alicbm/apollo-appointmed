import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { GynecologyEntity } from "../entities/Gynecology.entity";
import { connectDB } from "../db";
import { checkJwtGql } from "../utils/auth/checkJwt";
import { checkRolesGql } from "../utils/auth/checkRoles";

const gynecologySource = connectDB.getRepository(GynecologyEntity);

export const getAllGynecologyRequest = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await gynecologySource.find();
};

export const getOneGynecologyRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await gynecologySource.findOne({
    where: {
      id,
    },
  });
};

export const createGynecologyRequest = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  const data = await gynecologySource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updateGynecologyRequest = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  let findRequest = await gynecologySource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await gynecologySource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteGynecologyRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  await gynecologySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
