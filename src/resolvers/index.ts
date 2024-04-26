import {
  getOneGeneralMedicine,
  getAllGeneralMedicine,
  createGeneralMedicine,
  updateGeneralMedicine,
  deleteGeneralMedicine,
} from "./GeneralMedicine.resolvers";
import {
  createGynecology,
  deleteGynecology,
  getAllGynecology,
  getOneGynecology,
  updateGynecology,
} from "./Ginecology.resolvers";
import {
  createOdontology,
  deleteOdontology,
  getAllOdontology,
  getOneOdontology,
  updateOdontology,
} from "./Odontology.resolvers";
import {
  createOptometry,
  deleteOptometry,
  getAllOptometry,
  getOneOptometry,
  updateOptometry,
} from "./Optometry.resolvers";
import { createPediatrics, deletePediatrics, getAllPediatrics, getOnePediatrics, updatePediatrics } from "./Pediatrics.resolvers";

export const resolvers = {
  Query: {
    getAllGeneralMedicine,
    getOneGeneralMedicine,
    getAllGynecology,
    getOneGynecology,
    getAllOdontology,
    getOneOdontology,
    getAllOptometry,
    getOneOptometry,
    getAllPediatrics,
    getOnePediatrics
  },
  Mutation: {
    createGeneralMedicine,
    updateGeneralMedicine,
    deleteGeneralMedicine,
    createGynecology,
    updateGynecology,
    deleteGynecology,
    createOdontology,
    updateOdontology,
    deleteOdontology,
    createOptometry,
    updateOptometry,
    deleteOptometry,
    createPediatrics,
    updatePediatrics,
    deletePediatrics
  },
};
