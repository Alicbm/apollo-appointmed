import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { connectDB } from "../db";
import { checkRolesGql } from "../utils/auth/checkRoles";
import { checkJwtGql } from "../utils/auth/checkJwt";

const pediatricsSource = connectDB.getRepository(PediatricsEntity);

export const getAllPediatrics = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await pediatricsSource.find();
};

export const getOnePediatrics = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await pediatricsSource.findOne({
    where: {
      id,
    },
  });
};

export const createPediatrics = async (_, { dto }: CreateRequest, context) => {
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

export const updatePediatrics = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

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

export const deletePediatrics = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  await pediatricsSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
