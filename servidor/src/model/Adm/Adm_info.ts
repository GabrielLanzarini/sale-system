import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Adm_account } from "./Adm_account"

@Entity("Adm_infos")
export class Adm_info {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("text")
    name: String

    @Column("text")
    last_name: String

    @OneToOne(() => Adm_account)
    @JoinColumn({ name: "adm_id" })
    Adm_account: Adm_account
}
