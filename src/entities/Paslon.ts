import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Voter } from "./Voter"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    nama: string

    @Column({ nullable: true })
    noUrut: number

    @Column({ nullable: true })
    visiMisi: string

    @OneToMany(() => Voter, (voter) => voter.paslon)
    voters: Voter[]

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
