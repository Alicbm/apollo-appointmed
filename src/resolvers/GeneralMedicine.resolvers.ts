import { CreateRequest, findOne, UpdateRequest } from "../../types";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { connectDB } from "../db";
import { checkJwtGql } from "../utils/auth/checkJwt";
import { checkRolesGql } from "../utils/auth/checkRoles";

const generalMedicineSource = connectDB.getRepository(GeneralMedicineEntity);

export const getAllGeneralMedicineRequest = async (_, args, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await generalMedicineSource.find();
};  

export const getOneGeneralMedicineRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  return await generalMedicineSource.findOne({
    where: {
      id,
    },
  });
};

export const createGeneralMedicineRequest = async (_, { dto }: CreateRequest, context) => {
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

export const updateGeneralMedicineRequest = async (_, { id, dto }: UpdateRequest, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

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

  return { message: "Request not found" };
};

export const deleteGeneralMedicineRequest = async (_, { id }: findOne, context) => {
  const user = await checkJwtGql(context)  
  checkRolesGql(user, 'user', 'admin' )

  await generalMedicineSource.delete(id);
  return `Request with id: ${id} deleted succesfully.`;
};
