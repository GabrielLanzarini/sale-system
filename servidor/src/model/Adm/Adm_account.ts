import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("adm_accounts")
export class Adm_account {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 20 })
    username: string

    @Column({ type: "varchar", length: 100 })
    password: string
}
