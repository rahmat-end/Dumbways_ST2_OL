import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Voter1700554274826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "voter",
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
                        name: "alamat",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "jenisKelamin",
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
        await queryRunner.createForeignKey(
            "answer",
            new TableForeignKey({
                columnNames: ["paslonId"],
                referencedColumnNames: ["id"],
                referencedTableName: "paslon",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
