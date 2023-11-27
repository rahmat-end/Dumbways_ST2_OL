import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm"

export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    fullName: string

    @Column({ nullable: true })
    alamat: string

    @Column({ nullable: true })
    jenisKelamin: string

    @Column({ nullable: true })
    username: string

    @Column({ nullable: true })
    password: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
