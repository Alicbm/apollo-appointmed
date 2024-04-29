import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { OptometryEntity } from "../entities/Optometry.entity";
import { connectDB } from "../db";
import { checkRolesGql } from "../utils/auth/checkRoles";
import { checkJwtGql } from "../utils/auth/checkJwt";

const optometrySource = connectDB.getRepository(OptometryEntity);

export const getAllOptometryRequest = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await optometrySource.find();
};

export const getOneOptometryRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await optometrySource.findOne({
    where: {
      id,
    },
  });
};

export const createOptometryRequest = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  const data = await optometrySource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updateOptometryRequest = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  let findRequest = await optometrySource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await optometrySource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteOptometryRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  await optometrySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
