import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("User_accounts")
export class User_account {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("text")
    username: String

    @Column("text")
    password: String

    @Column("text")
    email: String
}
