import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { GynecologyEntity } from "../entities/Gynecology.entity";
import { connectDB } from "../db";

const gynecologySource = connectDB.getRepository(GynecologyEntity);

export const getAllGynecology = async () => {
  return await gynecologySource.find();
};

export const getOneGynecology = async (_, { id }: findOne) => {
  return await gynecologySource.findOne({
    where: {
      id,
    },
  });
};

export const createGynecology = async (_, { dto }: CreateRequest) => {
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

export const updateGynecology = async (_, { id, dto }: UpdateRequest) => {
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

export const deleteGynecology = async (_, { id }: findOne) => {
  await gynecologySource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
