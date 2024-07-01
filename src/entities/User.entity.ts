import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "USER", synchronize: true })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  eps: string;

  @Column()
  createdAt: string;
}
