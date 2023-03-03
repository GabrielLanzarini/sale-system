import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Product } from "./Product"
import { User_account } from "./User/User_account"

@Entity("requests")
export class Request {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("date")
    sale_date: Date

    @OneToOne(() => Product)
    @JoinColumn({ name: "product_id" })
    Product: Product

    @OneToOne(() => User_account)
    @JoinColumn({ name: "user_id" })
    User_account: User_account
}
