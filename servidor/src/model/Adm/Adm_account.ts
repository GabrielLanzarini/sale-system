import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("adm_accounts")
export class Adm_account {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    username: string

    @Column("text")
    password: string
}
