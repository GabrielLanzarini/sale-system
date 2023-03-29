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

    @Column({ type: "varchar", length: 20 })
    name: string

    @Column({ type: "varchar", length: 20 })
    last_name: string

    @Column({ type: "varchar", length: 11 })
    cpf: string

    @OneToOne(() => User_account, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user_account: User_account
}
