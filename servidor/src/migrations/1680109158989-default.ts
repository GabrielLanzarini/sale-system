import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680109158989 implements MigrationInterface {
    name = 'default1680109158989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "password" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "password" character varying(20) NOT NULL`);
    }

}
