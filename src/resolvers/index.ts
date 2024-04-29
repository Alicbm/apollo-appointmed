import { login } from "./Auth.resolvers";
import {
  getOneGeneralMedicineRequest,
  getAllGeneralMedicineRequest,
  createGeneralMedicineRequest,
  updateGeneralMedicineRequest,
  deleteGeneralMedicineRequest,
} from "./GeneralMedicine.resolvers";
import {
  createGynecologyRequest,
  deleteGynecologyRequest,
  getAllGynecologyRequest,
  getOneGynecologyRequest,
  updateGynecologyRequest,
} from "./Ginecology.resolvers";
import {
  createOdontologyRequest,
  deleteOdontologyRequest,
  getAllOdontologyRequest,
  getOneOdontologyRequest,
  updateOdontologyRequest,
} from "./Odontology.resolvers";
import {
  createOptometryRequest,
  deleteOptometryRequest,
  getAllOptometryRequest,
  getOneOptometryRequest,
  updateOptometryRequest,
} from "./Optometry.resolvers";
import {
  createPediatricsRequest,
  deletePediatricsRequest,
  getAllPediatricsRequest,
  getOnePediatricsRequest,
  updatePediatricsRequest,
} from "./Pediatrics.resolvers";
import {
  createPsychiatryRequest,
  deletePsychiatryRequest,
  getAllPsychiatryRequest,
  getOnePsychiatryRequest,
  updatePsychiatryRequest,
} from "./Psychiatry.resolvers";
import {
  createUsersRequest,
  deleteUsersRequest,
  getAllUsersRequest,
  getOneUserRequest,
  updateUsersRequest,
} from "./User.resolvers";

export const resolvers = {
  Query: {
    getAllGeneralMedicineRequest,
    getOneGeneralMedicineRequest,
    getAllGynecologyRequest,
    getOneGynecologyRequest,
    getAllOdontologyRequest,
    getOneOdontologyRequest,
    getAllOptometryRequest,
    getOneOptometryRequest,
    getAllPediatricsRequest,
    getOnePediatricsRequest,
    getAllPsychiatryRequest,
    getOnePsychiatryRequest,
    getAllUsersRequest,
    getOneUserRequest,
  },
  Mutation: {
    login,
    updateGeneralMedicineRequest,
    createGeneralMedicineRequest,
    deleteGeneralMedicineRequest,
    createGynecologyRequest,
    updateGynecologyRequest,
    deleteGynecologyRequest,
    createOdontologyRequest,
    updateOdontologyRequest,
    deleteOdontologyRequest,
    createOptometryRequest,
    updateOptometryRequest,
    deleteOptometryRequest,
    createPediatricsRequest,
    updatePediatricsRequest,
    deletePediatricsRequest,
    createPsychiatryRequest,
    updatePsychiatryRequest,
    deletePsychiatryRequest,
    createUsersRequest,
    updateUsersRequest,
    deleteUsersRequest,
  },
};
