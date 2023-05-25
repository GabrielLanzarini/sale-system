import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Adm_account } from "./Adm_account"

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 20 })
    product_name: string

    @Column("text")
    description: string

    @Column({ type: "varchar", length: 20 })
    photo: string

    @Column("integer")
    amount: number

    @Column({ type: "decimal", precision: 100, scale: 2 })
    value: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => Adm_account, { onDelete: "CASCADE" })
    @JoinColumn({ name: "adm_id" })
    adm_account: Adm_account
}
