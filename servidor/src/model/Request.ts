import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Product } from "./Product"
import { User_account } from "./User/User_account"

@Entity("requests")
export class Request {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    sale_date: Date

    @ManyToMany(() => Product)
    @JoinColumn({ name: "product_id" })
    product: Product

    @ManyToMany(() => User_account)
    @JoinColumn({ name: "user_id" })
    user_account: User_account
}
