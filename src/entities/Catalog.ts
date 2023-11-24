import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity()
export class Catalog {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    imageURL: string

    @Column()
    public_id: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Timestamp

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Timestamp

}
