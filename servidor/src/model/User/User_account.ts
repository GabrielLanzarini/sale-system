import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("user_accounts")
export class User_account {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 20 })
    username: string

    @Column({ type: "varchar", length: 100 })
    password: string

    @Column({ type: "varchar", length: 40 })
    email: string
}
