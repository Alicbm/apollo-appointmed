import { DataSource } from "typeorm";
import { GeneralMedicineEntity } from "../entities/GeneralMedicine.entity";
import { GynecologyEntity } from "../entities/Gynecology.entity";
import { OdontologyEntity } from "../entities/Odontology.entity";
import { OptometryEntity } from "../entities/Optometry.entity";
import { PediatricsEntity } from "../entities/Pediatrics.entity";
import { PsychiatryEntity } from "../entities/Psychiatry.entity";
import { UserEntity } from "../entities/User.entity";

export const connectDB = new DataSource({
  type: "mysql",
  host: "b96iqowc5ckf0tpgwxjj-mysql.services.clever-cloud.com",
  port: 3306,
  username: "ukjf9klq6pue1khz",
  password: "Wojms7Lq3356z5yUStfG",
  database: "b96iqowc5ckf0tpgwxjj",
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
  // logging: true,
  // subscribers: [],
  // migrations: [],
});

//clever cloud

connectDB
  .initialize()
  .then(() => {
    console.log("DB inizialized succesfully!");
  })
  .catch((err) => {
    console.log("There are problems with the DB: ", err);
  });


  // type: "mysql",
  // host: "localhost",
  // port: 3307,
  // username: "root",
  // password: "admin",
  // database: "appointmed",
  // synchronize: true,