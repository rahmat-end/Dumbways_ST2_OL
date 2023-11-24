import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Paslon1700102121830 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "paslon",
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
                        name: "noUrut",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "visiMisi",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paslon")
    }

}
