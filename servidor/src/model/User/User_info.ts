import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { User_account } from "./User_account"

@Entity("User_infos")
export class User_info {
    @PrimaryGeneratedColumn("uuid")
    id: String

    @Column("text")
    name: String

    @Column("text")
    last_name: String

    @Column("text")
    cpf: String

    @OneToOne(() => User_account)
    @JoinColumn({ name: "user_id" })
    User_account: User_account
}
