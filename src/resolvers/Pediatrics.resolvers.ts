import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { connectDB } from "../db";

const pediatricsSource = connectDB.getRepository(PediatricsEntity);

export const getAllPediatrics = async () => {
  return await pediatricsSource.find();
};

export const getOnePediatrics = async (_, { id }: findOne) => {
  return await pediatricsSource.findOne({
    where: {
      id,
    },
  });
};

export const createPediatrics = async (_, { dto }: CreateRequest) => {
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

export const updatePediatrics = async (_, { id, dto }: UpdateRequest) => {
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

export const deletePediatrics = async (_, { id }: findOne) => {
  await pediatricsSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
