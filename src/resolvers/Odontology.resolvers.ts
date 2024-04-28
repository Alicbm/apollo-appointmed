import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { OdontologyEntity } from "../entities/Odontology.entity";
import { connectDB } from "../db";
import { checkRolesGql } from "../utils/auth/checkRoles";
import { checkJwtGql } from "../utils/auth/checkJwt";

const odontologySource = connectDB.getRepository(OdontologyEntity);

export const getAllOdontology = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await odontologySource.find();
};

export const getOneOdontology = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await odontologySource.findOne({
    where: {
      id,
    },
  });
};

export const createOdontology = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  const data = await odontologySource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updateOdontology = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  let findRequest = await odontologySource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await odontologySource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteOdontology = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  await odontologySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
