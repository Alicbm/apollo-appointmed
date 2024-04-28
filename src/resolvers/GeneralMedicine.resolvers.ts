import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { connectDB } from "../db";
import { checkJwtGql } from "../utils/auth/checkJwt";
import { checkRolesGql } from "../utils/auth/checkRoles";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity);

export const getAllGeneralMedicine = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await generalMedicineSource.find();
};

export const getOneGeneralMedicine = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await generalMedicineSource.findOne({
    where: {
      id,
    },
  });
};

export const createGeneralMedicine = async (_, { dto }: CreateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

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

export const updateGeneralMedicine = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

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

export const deleteGeneralMedicine = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'admin' )

  await generalMedicineSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
