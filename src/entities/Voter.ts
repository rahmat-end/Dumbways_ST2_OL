import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Voter {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    nama: string

    @Column({ nullable: true })
    alamat: string

    @Column({ nullable: true })
    jenisKelamin: string

    @ManyToOne(() => Paslon, (paslon) => paslon.voters)
    paslon: Paslon

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
