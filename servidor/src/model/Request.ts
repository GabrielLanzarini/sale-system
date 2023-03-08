import {
    CreateDateColumn,
    Entity,
    JoinColumn,
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

    @ManyToOne(() => Product)
    @JoinColumn({ name: "product_id" })
    product: Product

    @ManyToOne(() => User_account)
    @JoinColumn({ name: "user_id" })
    user_account: User_account
}
