// const {
//   getProduct,
//   getProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
//   getProductsByCategory
//  } = require('./product.resolvers')

import { getOneGeneralMedicine, getAllGeneralMedicine, createGeneralMedicine, updateGeneralMedicine, deleteGeneralMedicine } from "./GeneralMedicine.resolvers";

// const { login } = require('./auth.resolvers')
// const { addCategory, getCategory } = require('./category.resolvers')

export const resolvers = {
  Query: {
    hello: () => 'Hola Campeón',
    getPerson: (_, { name, age}) => `Hola ${name}, tienes ${age} años y eres un campeón`,
    getAllGeneralMedicine,
    getOneGeneralMedicine
    // product: getProduct,
    // products: getProducts,
    // category: getCategory
  },
  Mutation : {
    createGeneralMedicine,
    updateGeneralMedicine,
    deleteGeneralMedicine,
    // login,
    // addProduct,
    // updateProduct,
    // deleteProduct,
    // addCategory
  },
  // CategoryNameType,
  // Category: {
  //   products: getProductsByCategory
  // }
}