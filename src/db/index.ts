import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { GynecologyEntity } from "../entities/Gynecology.entity";
import { OdontologyEntity } from "../entities/Odontology.entity";
import { OptometryEntity } from "../entities/Optometry.entity";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { PsychiatryEntity } from "../entities/Psychiatry.entity";
import { UserEntity } from "../entities/User.entity";

dotenv.config();

const host = process.env.MYSQL_ADDON_HOST;
const port = process.env.MYSQL_ADDON_PORT;
const username = process.env.MYSQL_ADDON_USER;
const password = process.env.MYSQL_ADDON_PASSWORD;
const database = process.env.MYSQL_ADDON_DB;

export const connectDB = new DataSource({
  type: "mysql",
  host,
  port: Number(port),
  username,
  password,
  database,
  synchronize: true,
  entities: [
    GeneralMedicineEntity,
    GynecologyEntity,
    OdontologyEntity,
    OptometryEntity,
    PediatricsEntity,
    PsychiatryEntity,
    UserEntity
  ],
});

connectDB
  .initialize()
  .then(() => {
    console.log("DB inizialized succesfully!");
  })
  .catch((err) => {
    console.log("There are problems with the DB: ", err);
  });