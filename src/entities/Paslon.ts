import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Voter } from "./Voter"
import { Partai } from "./Partai"

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

    @ManyToOne(() => Partai, (partai) => partai.paslons, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn([
        { name: "partaiId", referencedColumnName: "id" }
    ])
    partai: Partai

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
