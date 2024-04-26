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

export const resolvers = {
  Query: {
    getAllGeneralMedicine,
    getOneGeneralMedicine,
    getAllGynecology,
    getOneGynecology,
    getAllOdontology,
    getOneOdontology,
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
  },
};
