import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Adm_account } from "./Adm/Adm_account"

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("text")
    name: String

    @Column("text")
    description: String

    @Column("text")
    photo: String

    @Column("real")
    amount: Number

    @Column("real")
    value: Number

    @Column("date")
    created_at: Date

    @OneToOne(() => Adm_account)
    @JoinColumn({ name: "adm_id" })
    adm_account_id: Adm_account
}
