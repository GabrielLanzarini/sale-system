import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("user_accounts")
export class User_account {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    username: string

    @Column("text")
    password: string

    @Column("text")
    email: string
}
