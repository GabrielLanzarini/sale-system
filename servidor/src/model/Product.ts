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
    id: string

    @Column("text")
    name: string

    @Column("text")
    description: string

    @Column("text")
    photo: number

    @Column("real")
    amount: number

    @Column("real")
    value: number

    @Column("date")
    created_at: Date

    @OneToOne(() => Adm_account)
    @JoinColumn({ name: "adm_id" })
    adm_account_id: Adm_account
}
