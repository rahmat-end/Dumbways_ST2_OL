import { MigrationInterface, QueryRunner } from "typeorm";

export class PemiluDumbways1701061896256 implements MigrationInterface {
    name = 'PemiluDumbways1701061896256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying, "image" character varying, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "catalog" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "imageURL" character varying NOT NULL, "public_id" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_782754bded12b4e75ad4afff913" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying, "alamat" character varying, "jenisKelamin" character varying, "username" character varying, "password" character varying, "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voter" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "paslonId" integer, CONSTRAINT "REL_b6a3557076b565c888eb23f830" UNIQUE ("userId"), CONSTRAINT "PK_c1a0d8fd992c199219325d43705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paslon" ("id" SERIAL NOT NULL, "nama" character varying, "noUrut" integer, "visiMisi" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "partaiId" integer, CONSTRAINT "PK_f3367efce21ffeeff1e3f58244d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "nama" character varying, "ketuaUmum" character varying, "visiMisi" character varying, "alamat" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_b6a3557076b565c888eb23f8308" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "voter" ADD CONSTRAINT "FK_c84e4a554527f0c6dd46919bafe" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "paslon" ADD CONSTRAINT "FK_728ed660801fd8889bfe3d1bd7d" FOREIGN KEY ("partaiId") REFERENCES "partai"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" DROP CONSTRAINT "FK_728ed660801fd8889bfe3d1bd7d"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_c84e4a554527f0c6dd46919bafe"`);
        await queryRunner.query(`ALTER TABLE "voter" DROP CONSTRAINT "FK_b6a3557076b565c888eb23f8308"`);
        await queryRunner.query(`DROP TABLE "partai"`);
        await queryRunner.query(`DROP TABLE "paslon"`);
        await queryRunner.query(`DROP TABLE "voter"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "catalog"`);
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
