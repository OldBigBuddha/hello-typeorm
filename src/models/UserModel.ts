import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("users")
export class UserModel extends BaseEntity {

    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column("uuid")
    uuid!: string;

    @Column({ name: "first_name" })
    firstName!: string;

    @Column({ name: "last_name" })
    lastName!: string;

    @Column()
    age!: number;

    @Column({ type: "char", length: 16, default: ""})
    rnd!: string;

}
