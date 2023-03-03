import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("Adm_accounts")
export class Adm_account {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("text")
    username: String

    @Column("text")
    password: String
}
