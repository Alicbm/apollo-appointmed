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

export const resolvers = {
  Query: {
    hello: () => "Hola Campeón",
    getPerson: (_, { name, age }) =>
      `Hola ${name}, tienes ${age} años y eres un campeón`,
    getAllGeneralMedicine,
    getOneGeneralMedicine,
    getAllGynecology,
    getOneGynecology,
  },
  Mutation: {
    createGeneralMedicine,
    updateGeneralMedicine,
    deleteGeneralMedicine,
    createGynecology,
    updateGynecology,
    deleteGynecology,
  },
};
