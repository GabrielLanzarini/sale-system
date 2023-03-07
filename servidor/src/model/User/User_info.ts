import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { User_account } from "./User_account"

@Entity("user_infos")
export class User_info {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    name: string

    @Column("text")
    last_name: string

    @Column("text")
    cpf: string

    @OneToOne(() => User_account)
    @JoinColumn({ name: "user_id" })
    user_account: User_account
}
