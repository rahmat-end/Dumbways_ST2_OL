import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { Paslon } from "./Paslon"
import { User } from "./User"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn()
    user: User

    @ManyToOne(() => Paslon, (paslon) => paslon.voters, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn([
        { name: "paslonId", referencedColumnName: "id" }
    ])
    paslon: Paslon

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
