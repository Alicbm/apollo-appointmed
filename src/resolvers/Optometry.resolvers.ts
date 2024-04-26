import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { OptometryEntity } from "../entities/Optometry.entity";
import { connectDB } from "../db";

const optometrySource = connectDB.getRepository(OptometryEntity);

export const getAllOptometry = async () => {
  return await optometrySource.find();
};

export const getOneOptometry = async (_, { id }: findOne) => {
  return await optometrySource.findOne({
    where: {
      id,
    },
  });
};

export const createOptometry = async (_, { dto }: CreateRequest) => {
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

export const updateOptometry = async (_, { id, dto }: UpdateRequest) => {
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

export const deleteOptometry = async (_, { id }: findOne) => {
  await optometrySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
