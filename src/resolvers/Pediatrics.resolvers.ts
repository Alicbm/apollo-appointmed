import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { checkRolesGql } from "../utils/auth/checkRoles";
import { checkJwtGql } from "../utils/auth/checkJwt";
import { connectDB } from "../db";

const pediatricsSource = connectDB.getRepository(PediatricsEntity);

export const getAllPediatricsRequest = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await pediatricsSource.find();
};

export const getOnePediatricsRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await pediatricsSource.findOne({
    where: {
      id,
    },
  });
};

export const createPediatricsRequest = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  const data = await pediatricsSource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updatePediatricsRequest = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  let findRequest = await pediatricsSource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await pediatricsSource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deletePediatricsRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  await pediatricsSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
