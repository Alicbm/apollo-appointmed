import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "USER", synchronize: false })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: string;

  @Column()
  role: string;

}
