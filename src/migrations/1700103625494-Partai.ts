import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Partai1700103625494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "partai",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "nama",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "ketuaUmum",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "visiMisi",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "alamat",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
