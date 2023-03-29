import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { User_account } from "./User/User_account"

@Entity("requests")
export class Request {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    sale_date: Date

    @Column({ type: "varchar", length: 20 })
    product_name: string

    @Column("uuid")
    product_id: string

    @Column({ type: "decimal", precision: 100, scale: 2 })
    value: number

    @Column({ type: "integer" })
    amount: number

    @Column({ type: "varchar", length: 20 })
    photo: string

    @ManyToOne(() => User_account, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user_account: User_account
}
