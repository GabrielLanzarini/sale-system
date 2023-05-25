import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"

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
