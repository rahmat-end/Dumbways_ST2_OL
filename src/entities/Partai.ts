import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm"

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

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
