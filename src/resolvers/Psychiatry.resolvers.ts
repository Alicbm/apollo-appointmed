import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { PsychiatryEntity } from "../entities/Psychiatry.entity";
import { connectDB } from "../db";
import { checkRolesGql } from "../utils/auth/checkRoles";
import { checkJwtGql } from "../utils/auth/checkJwt";

const psychiatrySource = connectDB.getRepository(PsychiatryEntity);

export const getAllPsychiatryRequest = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await psychiatrySource.find();
};

export const getOnePsychiatryRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await psychiatrySource.findOne({
    where: {
      id,
    },
  });
};

export const createPsychiatryRequest = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  const data = await psychiatrySource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updatePsychiatryRequest = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  let findRequest = await psychiatrySource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await psychiatrySource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deletePsychiatryRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  await psychiatrySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
