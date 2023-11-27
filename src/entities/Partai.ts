import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    nama: string

    @Column({ nullable: true })
    ketuaUmum: string

    @Column({ nullable: true })
    visiMisi: string

    @Column({ nullable: true })
    alamat: string

    @OneToMany(() => Paslon, (paslon) => paslon.partai)
    paslons: Paslon[]

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
