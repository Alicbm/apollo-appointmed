import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { connectDB } from "../db";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity);

export const getAllGeneralMedicine = async () => {
  return await generalMedicineSource.find();
};

export const getOneGeneralMedicine = async (_, { id }: findOne) => {
  return await generalMedicineSource.findOne({
    where: {
      id,
    },
  });
};

export const createGeneralMedicine = async (_, { dto }: CreateRequest) => {
  const data = await generalMedicineSource.insert({
    ...dto,
    status: "Estable",
  });

  return {
    id: data.identifiers[0].id,
    ...dto,
    status: "Estable",
  };
};

export const updateGeneralMedicine = async (_, { id, dto }: UpdateRequest) => {
  let findRequest = await generalMedicineSource.findOne({ where: { id } });

  if (!id) {
    return "Id is required";
  }

  if (findRequest) {
    findRequest = {
      ...findRequest,
      ...dto,
    };

    await generalMedicineSource.save(findRequest);
    return "Your request update was succesfully";
  }

  return "Request not found";
};

export const deleteGeneralMedicine = async (_, { id }: findOne) => {
  await generalMedicineSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
